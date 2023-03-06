export class Carousel {
    constructor(parent, images = null) {
        this.parent = parent;
        this.images = images;
    }

    getCarouselIndicatorHtml(index) {
      return `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" ${index === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${index + 1}"></button>`;
    }

    getCarouselItemHtml(src, index) {
      return `<div class="carousel-item${(index === 0) ? 'active' : ''}">
      <img src="${src}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Метка первого слайда</h5>
        <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
      </div>
    </div>`;
    }

    getHtml() {
        return `
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          ${this.images?.forEach((_, index) => this.getCarouselIndicatorHtml(index))}
        </div>
        <div class="carousel-inner">
          ${this.images?.forEach((element, index) => this.getHtml(element.src, index))}
        </div>  
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>`;
    }

    render() {
        const html = this.getHtml();

        this.parent.insertAdjacentHTML('beforeend', html);
    }
}