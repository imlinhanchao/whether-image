# Whether Image

A module used to determine whether a file is a picture. Judge based on the file header.

## Installation
```bash
npm install whether-image
```

## Usage

```typescript
// Get Image Real type
import img from 'whether-image';
img.getImageSuffix('your/image/file/path'); 
// => `bmp` or `jpg` or `jpeg` or `png` or `gif` or `webp` or `tiff` or `tif`
```

```typescript
// Check is Image
import img from 'whether-image';
img.isImage('your/image/file/path');
// => true or false
```

## Parameters

```typescript
function getImageSuffix(file: ArrayBufferView | string, suffixs: Array<string>): string 
function isImage(file: ArrayBufferView | string, suffixs: Array<string>): boolean 
```

|parameter|description|
|--|--|
|file|The file path or byte that you want to check.|
|suffixs|The suffixs list you want to check. (Optional)|

### Support Image Type
- You can get it from variable `suffixs`. There are `bmp`, `jpg`, `jpeg`, `png`, `gif`, `webp`, `tiff`, `tif`.
