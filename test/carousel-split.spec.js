import CarouselSplit from './../src/js/carousel-split';


describe("Carousel - Split", () => {

  it("should be create new carousel", () => {
    const carousel = new CarouselSplit();
    expect(carousel).toBeTruthy();
  });

});