export class Carousel {
    constructor(parent, images = null) {
        this.parent = parent;
        this.images = images;
    }

    getCarouselIndicatorHtml(index) {
      return `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" ${index === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${index + 1}"></button>`;
    }

    getCarouselItemHtml(element, index) {
      return `<div class="carousel-item${(index === 0) ? ' active' : ''} h-100">
      <img src="${element.src}" class="d-block w-100 object-fit-cover align-middle" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Метка первого слайда</h5>
        <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
      </div>
    </div>`;
    }

    getHtml() {
        return `

        <div id="carouselExampleCaptions" class="carousel slide w-100" data-bs-ride="false" style="height: 500px">
          <div class="carousel-indicators">
            ${this.images.map((_, index) => this.getCarouselIndicatorHtml(index)).join("")}
          </div>
          <div class="carousel-inner h-100">
            ${this.images.map((element, index) => this.getCarouselItemHtml(element, index)).join("")}
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

