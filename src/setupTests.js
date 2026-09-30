import '@testing-library/jest-dom';

const $ = require('jquery');
window.$ = $;
window.jQuery = $;

// Mock window.scrollTo for jsdom
window.scrollTo = jest.fn();

// Mock IntersectionObserver for jsdom
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}
window.IntersectionObserver = MockIntersectionObserver;
