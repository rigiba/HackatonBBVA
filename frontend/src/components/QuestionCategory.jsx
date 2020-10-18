import React from 'react';

export default class QuestionCategory extends React.Component {
  state = {
    background_color: null,
  };

//   componentDidUpdate(prevState) {
//     const { category } = this.props;

//     if (category === 'transport')
//       this.setState({ background_color: '#30697c' });
//     else if (category === 'food')
//       this.setState({ background_color: '#28914b' });
//     else if (category === 'energy')
//       this.setState({ background_color: '#912841' });
//     else this.setState({ background_color: '#917328' });
//   }

  render() {
    const { background_color } = this.state;
    return (
      <div style={{ backgroundColor: background_color }}>
        <h2>{this.props.category}</h2>
      </div>
    );
  }
}
