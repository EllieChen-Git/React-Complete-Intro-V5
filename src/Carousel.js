import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    // getDerivedStateFromProps: allows you to accept data from a parent and get state that is derived from it.
    // In this case, we're removing the superfluous photos and just keeping the ones we want.
    let photos = ["http://placecorgi.com/600/600"]; //default images if there's no media

    if (media.length) {
      photos = media.map(({ large }) => large); //only grab large photos & set them to strings of urls
    }

    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
      // the data you receive from dataset is a string
      // Add '+' before a string will make it a number
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="pet" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbmail"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
