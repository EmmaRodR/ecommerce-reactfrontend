
interface SearchInputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const SearchInput: React.FC<SearchInputProps> = ({onChange}) => {

  return (
        <>
        <div className="searchinput-container">
            <input type="text"
                    name="search"
                    onChange={onChange}
            />
            <button type='submit'>Buscar</button>
        </div>
        </>
    )
}

export default SearchInput