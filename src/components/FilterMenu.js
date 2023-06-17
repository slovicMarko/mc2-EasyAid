import "../components/cssFiles/filterMenu.scss"
import Select from 'react-select'

const organiser = [
    { value: 'all', label: 'Sve' },
    { value: 'X1', label: 'Caritas Hrvatska' },
    { value: 'X2', label: 'Crveni Križ' },
]

const places = [
    { value: 'all', label: 'Sve' },
    { value: 'zg', label: 'Zagrebačka' },
    { value: 'sk', label: 'Sisačko-moslavačka' },
    { value: 'zd', label: 'Zadarska' },
]

const category = [
    { value: 'sve', label: 'Sve' },
    { value: 'edukacija', label: 'Edukacija' },
    { value: 'stariji', label: 'Briga o starijima' },
    { value: 'katastrofe', label: 'Prirodne katastrofe' },
    { value: 'priroda', label: 'Briga o okolišu' },
    { value: 'ostalo', label: 'Ostalo' }
]

const selectStyle = {
control: (provided, state) => ({
    ...provided,
    border:5,
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
                options={organiser}
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
            <div className="location-dropdown">
                <h2>Lokacija</h2>
                <Select 
                options={places}
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
            <div className="category-dropdown">
                <h2>Kategorija</h2>
                <Select 
                options={category}
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
        </div>
    );
}