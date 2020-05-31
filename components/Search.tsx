import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SearchImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-left: 8px;
`;

const CloseImage = styled.Image`
  width: 14px;
  height: 14px;
  margin-left: 8px;
`;

const TextInput = styled.TextInput`
  width: 170px;
  padding: 4px 8px;
  font-size: 18px;
  font-family: Roboto-Light;
  color: #fff;
  border-bottom-width: 2px;
  border-bottom-color: #fff;
`;

interface SState {
  isOpen: boolean;
  searchValue: string;
}

class Search extends Component<{}, SState> {
  constructor(props: object) {
    super(props);

    this.state = {isOpen: false, searchValue: ''};
  }

  private handleOpen = () => {
    const isOpen = !this.state.isOpen ? true : false;
    return this.setState({
      isOpen,
      searchValue: '',
    });
  };

  private handleChange = (text: string): void => {
    return this.setState({
      searchValue: text,
    });
  };

  public render() {
    return (
      <TouchableOpacity onPress={this.handleOpen}>
        {(() => {
          if (this.state.isOpen) {
            return (
              <Container>
                <TextInput
                  value={this.state.searchValue}
                  onChangeText={this.handleChange}
                  selectionColor="#ffdf08"
                />
                <CloseImage
                  source={require('../assets/close.png')}
                />
              </Container>
            );
          } else {
            return (
              <Container>
                <SearchImage
                  source={require('../assets/search.png')}
                />
              </Container>
            );
          }
        })()}
      </TouchableOpacity>
    );
  }
}

export default Search;
