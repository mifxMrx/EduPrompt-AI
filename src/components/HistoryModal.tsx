import React, { useState } from 'react';
import {
  X,
  Bookmark,
  Trash2,
  Copy,
  Clock,
  Search,
  ExternalLink,
  Check,
} from 'lucide-react';
import type { HistoryItem } from '../types';
import { copyToClipboard } from '../utils/export';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryItem[];
  onToggleFavorite: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onClearAll: () => void;
  onLoadItem: (item: HistoryItem) => void;
  showToast: (msg: string, type?: 'success' | 'info' | 'warning') => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  onToggleFavorite,
  onDeleteItem,
  onClearAll,
  onLoadItem,
  showToast,
}) => {
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredItems = history
    .filter((item) => (filter === 'favorites' ? item.isFavorite : true))
    .filter(
      (item) =>
        item.topic.toLowerCase().includes(search.toLowerCase()) ||
        item.templateTitle.toLowerCase().includes(search.toLowerCase())
    );

  const handleCopy = async (id: string, text: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(id);
      showToast('Prompt disalin ke clipboard!', 'success');
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const formatDate = (ts: number) => {
    const date = new Date(ts);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Riwayat & Prompt Favorit
              </h2>
              <p className="text-xs text-slate-500">
                Tersimpan aman di penyimpanan lokal (localStorage) browser Anda.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari topik atau template..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Semua ({history.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('favorites')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'favorites'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Favorit ({history.filter((i) => i.isFavorite).length})
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-slate-400 dark:text-slate-500">
              <Clock className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-sm font-semibold">
                {filter === 'favorites'
                  ? 'Belum ada prompt yang ditandai sebagai favorit.'
                  : 'Belum ada riwayat pembuatan prompt.'}
              </p>
              <p className="text-xs mt-1">
                Prompt yang Anda hasilkan akan otomatis tersimpan di sini.
              </p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/80 p-4 hover:border-teal-500/50 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 mr-2">
                      {item.templateTitle}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {formatDate(item.timestamp)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => onToggleFavorite(item.id)}
                      className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                        item.isFavorite
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-slate-400 hover:text-amber-500'
                      }`}
                      title={item.isFavorite ? 'Hapus favorit' : 'Bintang favorit'}
                    >
                      <Bookmark className={`w-4 h-4 ${item.isFavorite ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeleteItem(item.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      title="Hapus dari riwayat"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                  {item.topic}
                </h3>

                <p className="text-xs font-mono bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                  {item.generatedPrompt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60 text-xs">
                  <span className="text-[11px] text-slate-400">
                    Profil: <strong className="capitalize">{item.persona}</strong>
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.generatedPrompt)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-teal-50 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span>Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onLoadItem(item);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 hover:bg-teal-600 hover:text-white transition-colors"
                    >
                      <span>Muat ke Editor</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        {history.length > 0 && (
          <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Total tersimpan: {history.length} prompt
            </span>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Yakin ingin menghapus seluruh riwayat lokal Anda?')) {
                  onClearAll();
                  showToast('Seluruh riwayat berhasil dibersihkan', 'info');
                }
              }}
              className="text-rose-500 hover:text-rose-600 font-medium hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Kosongkan Semua Riwayat</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
