import { promiseRandomTimeout } from "./promiseRandomTimeout";

describe('promiseRandomTimeout function', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });
  it('should resolve promise after 10s', async () => {
    const promise = promiseRandomTimeout('abc');
    jasmine.clock().tick(10000);
    const val = await promise;
    expect(val).toBe('abc');
  });
  it('should resolve promise after 10s (.then)', () => {
    const promise = promiseRandomTimeout('abc');
    jasmine.clock().tick(10000);
    return promise.then((val) => {
      expect(val).toBe('abc');
    });
  });
});
