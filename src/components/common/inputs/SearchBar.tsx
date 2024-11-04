import '/src/styles/searchbar.css'
import { FiSearch } from "react-icons/fi";


interface SearchBarProps {
  searchHandler: React.ChangeEventHandler<HTMLInputElement>
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({value,searchHandler}) => {


  return (
    <div className="searchbarcontainer">
    <input className="searchbar" 
            type="text" 
            value={value}
            placeholder='Search...'
            onChange={searchHandler}>
    </input>
    <div className='searchbtncontainer'><FiSearch color='white'/>
    </div>
    </div>
  )
}

export default SearchBar