// Utility functions to parse SSE-like responses and format HTML for ChatBot

export const stripSSEAndAggregate = (raw) => {
  if (!raw) return "";
  // Remove 'data:' prefixes and [DONE], aggregate with newline
  return raw
    .split(/\r?\n/)
    .map((line) => line.replace(/^data:\s*/, "").trim())
    .filter((line) => line && line !== "[DONE]")
    .join("\n");
};

export const linkifyUrls = (text) => {
  const urlRegex = /(https?:\/\/[^\s<]+)/g;
  return text.replace(urlRegex, (url) => {
    const cleanUrl = url.replace(/[`'\"]/g, "");
    return `<a href="${cleanUrl}" class="text-blue-500" target="_blank" rel="noopener noreferrer">${cleanUrl}</a>`;
  });
};

export const toHtml = (text, url) => {
  let responseText = String(text || "");
  // Replace backticked URLs and linkify any inline URLs
  responseText = responseText.replace(/`(https?:\/\/[^`\s]+)`/g, "$1");
  responseText = linkifyUrls(responseText);
  // Convert newlines to <br>
  responseText = responseText.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
  // Append URL anchor if provided
  if (url) {
    const cleanUrl = String(url).replace(/[`'\"]/g, '').trim();
    if (cleanUrl) {
      responseText = `${responseText}<br>Learn more: <a href="${cleanUrl}" class="text-blue-500" target="_blank" rel="noopener noreferrer">${cleanUrl}</a>`;
    }
  }
  return responseText.trim();
};