import {Component} from 'react'
import {
  CustomButton,
  Heading,
  Container,
  MainContainer,
  BottomContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    image: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  imageUrl = event => {
    this.setState({image: event.target.value})
  }

  topText = event => {
    this.setState({topText: event.target.value})
  }

  bottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
  }

  onChangeSortBy = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {image, topText, bottomText, fontSize} = this.state

    return (
      <>
        <MainContainer>
          <div>
            <Heading outline>Meme Generator</Heading>
            <form onSubmit={this.submitForm}>
              <Container>
                <label htmlFor="image">Image URL</label>
                <input type="text" id="image" onChange={this.imageUrl} />
              </Container>

              <Container>
                <label htmlFor="topText">Top Text</label>
                <input type="text" id="topText" onChange={this.topText} />
              </Container>

              <Container>
                <label htmlFor="bottomText">Bottom Text</label>
                <input type="text" id="bottomText" onChange={this.bottomText} />
              </Container>

              <Container>
                <label htmlFor="fontSize">Font Size</label>
                <select id="fontSize" onChange={this.onChangeSortBy}>
                  {fontSizesOptionsList.map(item => (
                    <option value={item.optionId} key={item.optionId}>
                      {item.displayText}
                    </option>
                  ))}
                </select>
              </Container>

              <div>
                <CustomButton type="submit" outline onClick={this.getValues}>
                  Generate
                </CustomButton>
              </div>
            </form>
          </div>
          <BottomContainer bgImage={image} data-testid="meme">
            <Text fontSize={fontSize}>{topText}</Text>
            <Text fontSize={fontSize}>{bottomText}</Text>
          </BottomContainer>
        </MainContainer>
      </>
    )
  }
}

export default MemeGenerator
