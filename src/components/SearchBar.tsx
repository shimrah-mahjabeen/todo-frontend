import { useState } from "react";

const SearchBar = ({searchTasks} : {searchTasks: (searchText: string) => void}) => {
    const [searchText, setSearchText] = useState('');


    return (
        <div className="flex gap-2 m-4 p-2">
            <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="bg-zinc-700 text-white rounded-md p-2"  />
            <button className="bg-zinc-700 text-white rounded-md p-2" onClick={() => searchTasks(searchText)}>Search</button>
        </div>
    )
}

export default SearchBar