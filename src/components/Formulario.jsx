import React from 'react';
import Select from 'react-select';


class Formulario extends React.Component {
  state = {
    selectedOption: null,
    idiomas : [],
    siglasIdiomas : []
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

 

async componentDidMount() {
  const response = await fetch(
    'https://v2.jokeapi.dev/languages'
  );
  const responseData = await response.json();

  this.setState({ idiomas : responesData.jokeLanguages});
}

  render() {
    const options = [
      
      { value: 'en', label: 'Inglés' },
      { value: 'de', label: 'Aleman' },
      { value: 'cs', label: 'Checo' },
      { value: 'pt', label: 'Portugues' },
      { value: 'fr', label: 'Frances' },
    ];

    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default Formulario;
