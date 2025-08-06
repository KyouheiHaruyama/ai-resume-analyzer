# formatSize Function Implementation

## Overview
This document describes the implementation of the `formatSize` function, which converts a file size in bytes to a human-readable string (KB, MB, GB, TB).

## Implementation Details

### 1. Created a new utility function
- Created a new file `app/lib/utils.ts` with the `formatSize` function
- The function takes a size in bytes and an optional decimals parameter (default: 2)
- Returns a human-readable string with the appropriate unit (Bytes, KB, MB, GB, TB)

### 2. Updated the FileUploader component
- Imported the `formatSize` function in `app/components/FileUploader.tsx`
- Extracted the maxFileSize as a constant for reuse
- Updated the file information section to display the selected file's name and size
- Updated the max file size display to use the `formatSize` function

## Testing

### Running the Test
To run the test for the `formatSize` function:

```bash
# Install ts-node if not already installed
npm install -g ts-node

# Run the test
ts-node test-format-size.ts
```

### Expected Test Results
The test verifies that the `formatSize` function correctly formats various byte values:
- 0 bytes → "0 Bytes"
- 500 bytes → "500 Bytes"
- 1023 bytes → "1023 Bytes"
- 1024 bytes → "1 KB"
- 1500 bytes → "1.46 KB"
- 1048576 bytes (1 MB) → "1 MB"
- 2.5 MB → "2.5 MB"
- 1 GB → "1 GB"
- 1.75 GB → "1.75 GB"
- 1 TB → "1 TB"

## Usage Examples

```typescript
import { formatSize } from '../lib/format';

// Examples
formatSize(0);                    // "0 Bytes"
formatSize(1024);                 // "1 KB"
formatSize(1024 * 1024);          // "1 MB"
formatSize(1024 * 1024 * 1024);   // "1 GB"
formatSize(1500);                 // "1.46 KB"
formatSize(1500, 1);              // "1.5 KB" (with 1 decimal place)
```

## UI Changes
- When a file is selected in the FileUploader component, it now displays:
  - The file name
  - The file size in a human-readable format (e.g., "2.5 MB")
- The upload prompt now displays "PDF (max 20 MB)" using the `formatSize` function