import "../components/cssFiles/filterMenu.scss"
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const customStyles = {
control: (provided, state) => ({
    ...provided,
    colors: {
        ...theme.colors,
        primary25: '#edffed',
        primary: '#379f48',
      },
}),
};

export function FilterMenu () {
    return(
        <div className="filter-content">
            <div className="organiser-dropdown">
                <h2>Organizator</h2>
                <Select 
                options={options}
                maxMenuHeight={100}
                //onChange={}
                styles={options}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                    ...theme.colors,
                    primary25: '#edffed',
                    primary: '#379f48',
                    },
                })}
                />
            </div>
            <div className="location-dropdown">
                <h2>Lokacija</h2>
                <Select 
                options={options}
                maxMenuHeight={100}
                //onChange={}
                styles={options}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                    ...theme.colors,
                    primary25: '#edffed',
                    primary: '#379f48',
                    },
                })}
                />
            </div>
        </div>
    );
}