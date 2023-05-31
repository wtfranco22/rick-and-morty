export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Search</button>
      </div>
   );
}