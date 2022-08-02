/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import '@testing-library/jest-dom/extend-expect';
import fetchingData from '../Mock/crypto';

describe('test fetching data', () => {
  it('test fetching cases recovered', async () => {
    await fetchingData().then((coin) =>
      expect(coin.coin[0].property.crypto_volume).toEqual(2334444455)
    );
  });
});
