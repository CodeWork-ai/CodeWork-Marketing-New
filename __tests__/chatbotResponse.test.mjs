import { test, strict as assert } from 'node:test';
import { stripSSEAndAggregate, toHtml } from '../app/lib/chatbotResponse.mjs';

const SAMPLE_SSE = `data: {"response_mode": "answer", "question": "service", "answer": "1. AI Implementation  \n2. AI Model Training & Fine Tuning  \n3. AI Driven Customer Software Development  \n4. DevOps Solutions  \n5. Cloud Computing  \n6. AI in Cyber Security  \n7. AI Automation  \n8. Agentic AI  \n9. IT staff Augmentation  \n10. AI in Digital Marketing Services  \n11. Professional Annotation Services", "response_id": "9457674a-60a5-4f7c-91b7-a620a8089a60", "url": " \`https://codework.ai/ai-services\` "}\n\n data: [DONE]`;

// Extract answer and url from the sample SSE JSON
const parsedLine = JSON.parse(SAMPLE_SSE.split(/\r?\n/)[0].replace(/^data:\s*/, ''));
const ANSWER = parsedLine.answer;
const URL = parsedLine.url;

test('stripSSEAndAggregate removes data: and [DONE], preserves newlines', () => {
  const aggregated = stripSSEAndAggregate(SAMPLE_SSE);
  assert.ok(!aggregated.includes('data:'), 'should remove data: prefix');
  assert.ok(!aggregated.includes('[DONE]'), 'should remove [DONE] sentinel');
  assert.ok(aggregated.includes('AI Implementation'), 'should contain answer text');
});

test('toHtml converts \n to <br>, adds Learn more, and renders blue anchor', () => {
  const html = toHtml(ANSWER, URL);
  assert.ok(html.includes('<br>'), 'should include <br> for newlines');
  assert.ok(html.includes('Learn more:'), 'should prepend Learn more label');
  assert.ok(html.includes('https://codework.ai/ai-services'), 'should include clean URL');
  assert.ok(html.includes('<a href="https://codework.ai/ai-services"'), 'should render URL as anchor');
  assert.ok(html.includes('class="text-blue-500"'), 'anchor should include blue text class');
});

test('toHtml handles plain text with inline URLs', () => {
  const plain = 'Visit https://example.com for details';
  const html = toHtml(plain);
  assert.ok(html.includes('<a href="https://example.com"'), 'inline URL should be linkified');
});