import capitalize from './capitalize'

test('"odin project" should become "Odin project"', () => {
    expect(capitalize('odin project')).toBe('Odin project');
  });