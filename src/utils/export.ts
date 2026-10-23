import confetti from 'canvas-confetti';

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      triggerCelebration();
      return true;
    } else {
      // Fallback for older browsers or non-secure context
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      if (successful) triggerCelebration();
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
}

export function downloadAsTxt(content: string, suggestedFilename: string): void {
  const cleanName = suggestedFilename
    .trim()
    .replace(/[^\w\s-]/gi, '')
    .replace(/\s+/g, '_')
    .slice(0, 50);

  const filename = `EduPrompt_${cleanName || 'Generated'}.txt`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function triggerCelebration(): void {
  try {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#0d9488', '#0284c7', '#10b981', '#6366f1'],
    });
  } catch {
    // Ignore confetti errors if canvas isn't supported
  }
}

export const GEMINI_URL = 'https://gemini.google.com/';
export const CHATGPT_URL = 'https://chatgpt.com/';
