// Simple test script for the formatSize function
import { formatSize } from '~/lib/utils';

// Test cases
const testCases = [
  { bytes: 0, expected: '0 Bytes' },
  { bytes: 500, expected: '500 Bytes' },
  { bytes: 1023, expected: '1023 Bytes' },
  { bytes: 1024, expected: '1 KB' },
  { bytes: 1500, expected: '1.46 KB' },
  { bytes: 1024 * 1024, expected: '1 MB' },
  { bytes: 1024 * 1024 * 2.5, expected: '2.5 MB' },
  { bytes: 1024 * 1024 * 1024, expected: '1 GB' },
  { bytes: 1024 * 1024 * 1024 * 1.75, expected: '1.75 GB' },
  { bytes: 1024 * 1024 * 1024 * 1024, expected: '1 TB' },
];

// Run tests
console.log('Testing formatSize function:');
console.log('---------------------------');

testCases.forEach(({ bytes, expected }) => {
  const result = formatSize(bytes);
  const passed = result === expected;
  
  console.log(`Input: ${bytes} bytes`);
  console.log(`Expected: ${expected}`);
  console.log(`Result: ${result}`);
  console.log(`Test ${passed ? 'PASSED' : 'FAILED'}`);
  console.log('---------------------------');
});

// Manual verification of the function with specific values
console.log('Manual verification:');
console.log('---------------------------');
console.log(`20 MB: ${formatSize(20 * 1024 * 1024)}`);
console.log(`2.5 GB: ${formatSize(2.5 * 1024 * 1024 * 1024)}`);
console.log(`0 bytes: ${formatSize(0)}`);
console.log(`1023 bytes: ${formatSize(1023)}`);
console.log(`1024 bytes: ${formatSize(1024)}`);
console.log('---------------------------');