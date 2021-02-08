import img from '../index';
import * as path from 'path';

test('Check Image File', () => {
    expect(img.isImage(path.join(__dirname, 'test'), ['png'])).toBe(true);
});

test('Get Image Suffix', () => {
    expect(img.getImageSuffix(path.join(__dirname, 'test'), img.suffixs)).toBe('png');
});

test('Check Specified Type Image', () => {
    expect(img.isImage(path.join(__dirname, 'test'), ['jpg'])).toBe(false);
});