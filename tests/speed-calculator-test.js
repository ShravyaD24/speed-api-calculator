import { SpeedCalculationService } from '../dist/services/speedService.js';

console.log('Speed Calculator Tests: ');

// Assignment requirement tests
const tests = [
    { input: { initialSpeed: 60, inclines: [0, 30, 0, -45, 0] }, expected: 75 },
    { input: { initialSpeed: 75, inclines: [0, 30, 0, -45, 0] }, expected: 90 },
    { input: { initialSpeed: 80, inclines: [0, 30, 0, -45, 0] }, expected: 95 }
];

let passed = 0;

tests.forEach((test, i) => {
    const result = SpeedCalculationService.calculateFinalSpeed(test.input.initialSpeed, test.input.inclines);
    const success = result === test.expected;
    
    console.log(`Test ${i + 1}: ${success ? 'PASS' : 'FAIL'} (Expected: ${test.expected}, Got: ${result})`);
    
    if (success) passed++;
});

console.log(`\nResult: ${passed}/${tests.length} tests passed`);

if (passed === tests.length) {
    console.log('All tests passed!');
} else {
    console.log('Some tests failed');
}