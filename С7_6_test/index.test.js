const reverseStr = require('./index.js');

test('reverse string qwerty to ytrewq', () => {
    expect(reverseStr('qwerty')).toBe('ytrewq');
});

describe (
    'tests reverse',
    () => {
        it('reverse string qwerty to ytrewq', () => {
            expect(reverseStr('qwerty')).toBe('ytrewq');
        });
        it('reverse string poiuytr to rtyuiop', () => {
            expect(reverseStr('poiuytr')).toBe('rtyuiop');
        });
        it('reverse string zxcvbnm to mnbvcxz', () => {
            expect(reverseStr('zxcvbnm')).toBe('mnbvcxz');
        });
    }
)