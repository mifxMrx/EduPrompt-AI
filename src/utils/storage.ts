import type { HistoryItem } from '../types';

const HISTORY_KEY = 'edueduprompt_history_v1';
const MAX_HISTORY_ITEMS = 50;

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn(`[EduPrompt] Unable to read ${key} from localStorage:`, e);
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn(`[EduPrompt] Unable to write ${key} to localStorage:`, e);
  }
}

export function getHistory(): HistoryItem[] {
  const raw = safeGetItem(HISTORY_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getFavorites(): HistoryItem[] {
  const history = getHistory();
  return history.filter((item) => item.isFavorite);
}

export function saveHistoryItem(
  item: Omit<HistoryItem, 'id' | 'timestamp' | 'isFavorite'>,
  markFavorite = false
): HistoryItem {
  const current = getHistory();

  const newItem: HistoryItem = {
    ...item,
    id: 'hist_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    timestamp: Date.now(),
    isFavorite: markFavorite,
  };

  // Prepend new item and keep max items
  const updated = [newItem, ...current.filter((i) => i.topic !== newItem.topic || i.templateId !== newItem.templateId)].slice(
    0,
    MAX_HISTORY_ITEMS
  );

  safeSetItem(HISTORY_KEY, JSON.stringify(updated));
  return newItem;
}

export function toggleFavorite(id: string): boolean {
  const current = getHistory();
  let newState = false;
  const updated = current.map((item) => {
    if (item.id === id) {
      newState = !item.isFavorite;
      return { ...item, isFavorite: newState };
    }
    return item;
  });

  safeSetItem(HISTORY_KEY, JSON.stringify(updated));
  return newState;
}

export function deleteHistoryItem(id: string): void {
  const current = getHistory();
  const updated = current.filter((item) => item.id !== id);
  safeSetItem(HISTORY_KEY, JSON.stringify(updated));
}

export function clearHistory(): void {
  safeSetItem(HISTORY_KEY, JSON.stringify([]));
}
