import './Main.css';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import Spinner from './Spinner';

export const Main = ({ searchQuery, handleChange, isSubmitted, cards, onSubmit }) => {
    return (
        <div className='App'>
        <div className="App-content">
          <form className="App-search" onSubmit={onSubmit}>
            <Input placeholder={'Search free high-resolution photos'} onChange={handleChange} value={searchQuery} />
            <Button type='submit'>Search</Button>
          </form>
          <div className="App-cards">
            {!isSubmitted && cards.map((item) => {
              return <Card key={item.id} {...item} />
            })}
            {isSubmitted && <Spinner />}
          </div>

        </div>
      </div>
    );
}
