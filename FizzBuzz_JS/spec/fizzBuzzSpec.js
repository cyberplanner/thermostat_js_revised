describe('fizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('Knows when number is ', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toEqual(true);
    });
  });

  describe('Knows when number is Not ', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(1)).toEqual(false);
    });
  });

  describe('Knows when number is ', function() {
    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toEqual(true);
    });
  });

  describe('Knows when number is Not ', function() {
    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(2)).toEqual(false);
    });
  });

  describe('Knows when number is ', function() {
    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(15)).toEqual(true);
    });
  });

  describe('Knows when number is Not ', function() {
    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(3)).toEqual(false);
    });
  });

  describe('When playing, it: ', function() {
    it('returns "Fizz" when number is divisible by 3', function() {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });

    it('returns "Buzz" when number is divisible by 5', function() {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
    });

    it('returns "FizzBuzz" when number is both divisible by 3 and 5', function() {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    });

    it('returns the number when is not divisible by 3 or 5', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  });
});
