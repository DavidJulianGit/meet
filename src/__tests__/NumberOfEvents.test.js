import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {

   let NumberOfEventsComponent;

   beforeEach(() => {

      NumberOfEventsComponent = render(
         <NumberOfEvents
            setCurrentNOE={() => { }}
            setErrorAlert={() => { }}
         />
      );

   });

   test('has an element with "textbox" role', () => {
      expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
   });

   test('default value is 32', () => {
      expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
   });

   test('update numberOfEvents when user types', async () => {
      const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
      const user = userEvent.setup();
      await user.clear(numberOfEvents);
      await user.type(numberOfEvents, '10');
      expect(numberOfEvents).toHaveValue('10');
   })

});