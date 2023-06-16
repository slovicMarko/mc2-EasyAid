import "../components/cssFiles/sortMenu.scss"
import Select from "react-select";

const order = [
    { value: 'newest', label: 'Najnovije prvo' },
    { value: 'ends', label: 'Završava uskoro' },
    { value: 'popular', label: 'Popularno' },
    { value: 'max', label: 'Najviše ljudi' },
    { value: 'min', label: 'Najmanje ljudi' },
]

export function SortMenu () {
    return(
        <div className="sort-content">
            <Select 
                options={order}
                maxMenuHeight={150}
                //onChange={}
                theme={(theme) => ({
                    ...theme,
                    borderRadius:16,
                    colors: {
                    ...theme.colors,
                    primary25: '#edffed',
                    primary: '#379f48',
                    },
                })}
                />
        </div>
    );
}