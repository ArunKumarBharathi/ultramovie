import Movie from "../Movie";

import ReactDOM from 'react-dom';
import App from "../App";

import '@testing-library/jest-dom';

it('appear Hellow world', () => {

ReactDOM.render(<Movie></Movie>,div)

});

  describe('My first snapshot test', () => {
    beforeEach(() => {
        let component = shallow(<BaseRubricViewScore {...props} {...classes} localize={getLocalizeMock()} />);
      });

    it('should render movie list based on languages', () => {

        expect(component.find(poster).exists()).toBe(false);
      
      });
      
      
      
      it('should render movie list based on latest  movie', () => {
      
        expect(component.find(Score).exists()).toBe(true);
      
      });
      
      
      
      it('should render movie list based on sort by date' , () => {
      
        expect(component.find(Score).find('DefaultGradeValue').exists()).toBe(true);
      
      });
      
      
      
      it('should render movie list based on sort by rating' , () => {
      
        expect(component.find(Score).find('DefaultGradeValue').exists()).toBe(true);
      
      });
    test('testing app button', () => {
        let tree = create(<App />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
    
});
