import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveRoute, getPathForPage } from './routes.ts';

test('resolveRoute resolves home and root', () => {
  const match = resolveRoute('/');
  assert.equal(match.page, 'home');
  assert.equal(match.language, 'en');
});

test('resolveRoute redirects legacy /o-home/about-us/ to about', () => {
  const match = resolveRoute('/o-home/about-us/');
  assert.equal(match.page, 'about');
  assert.equal(match.isRedirected, true);
});

test('resolveRoute redirects legacy /infrastructure to the-facility', () => {
  const match = resolveRoute('/infrastructure');
  assert.equal(match.page, 'the-facility');
  assert.equal(match.isRedirected, true);
});

test('resolveRoute correctly handles Senegal french page', () => {
  const match = resolveRoute('/fr/senegal');
  assert.equal(match.page, 'fr-senegal');
  assert.equal(match.language, 'fr');
});

test('getPathForPage maps back to proper clean URLs', () => {
  assert.equal(getPathForPage('the-facility'), '/the-facility');
  assert.equal(getPathForPage('fr-senegal'), '/fr/senegal');
});
