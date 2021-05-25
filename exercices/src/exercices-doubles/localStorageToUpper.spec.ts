import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  it('should convert key to upper', () => {
    spyOn(localStorage, 'getItem').and.returnValue('abc');

    expect(localStorageToUpper('my-key')).toBe('ABC');

    expect(localStorage.getItem).toHaveBeenCalledWith('my-key');
  });
});
