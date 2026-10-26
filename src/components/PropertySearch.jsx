
import './PropertySearch.css';

const locations = [
  'Any', 'Alamo', 'Alton', 'Amargosa Valley', 'Beatty', 'Beryl',
  'Blue Diamond', 'Boulder City', 'Brian Head', 'Cal Nev Ari',
  'Caliente', 'Cedar City', 'Cold Creek', 'Crystal', 'Duck Creek Village',
  'Dyer', 'Elko', 'Ely', 'Goldfield', 'Goodsprings', 'Hatch',
  'Henderson', 'Indian Springs', 'Jean', 'Las Vegas', 'Laughlin',
  'Logandale', 'Mc Gill', 'Mesquite', 'Moapa', 'Mount Charleston',
  'Mountain Springs', 'Nelson', 'North Las Vegas', 'Other', 'Overton',
  'Pahrump', 'Palm Gardens', 'Panaca', 'Parowan', 'Pioche', 'Ruth',
  'Sandy Valley', 'Searchlight', 'Tonopah',
];

const propertyTypes = [
  'Any', 'Land', 'Residential Lease', 'High Rise', 'Residential',
];

const sortOptions = [
  'Newest',
  'Oldest',
  'Least Expensive to Most',
  'Most Expensive to Least',
  'Bedrooms (Low to High)',
  'Bedrooms (High to Low)',
  'Bathrooms (Low to High)',
  'Bathrooms (High to Low)',
];

const bedroomOptions = [
  'Any Number', 'Studio', '1+', '2+', '3+', '4+', '5+', '6+',
];

const bathroomOptions = [
  'Any Number', '1+', '2+', '3+', '4+', '5+', '6+',
];

function PropertySearch() {
  return (
    <section className="property-search-section" id="properties">
      <div className="property-search-overlay">
        <div className="container">
          <div className="property-search-heading">
            <div className="property-search-eyebrow">
              <span className="property-search-line"></span>
              <span>SEARCH LISTINGS</span>
            </div>

            <h2>
              Find Your <br />
              <em>Dream Home</em>
            </h2>

            <p>
              Discover the perfect property that fits your lifestyle,
              needs, and future.
            </p>
          </div>

          <form
            className="property-search-form"
            onSubmit={(event) => event.preventDefault()}
          >
            {/* First row: three main fields */}
            <div className="property-field">
              <label htmlFor="property-location">Location</label>
              <select id="property-location" defaultValue="Any">
                {locations.map((location, index) => (
                  <option
                    key={`${location}-${index}`}
                    value={location}
                  >
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="property-field">
              <label htmlFor="property-type">Type</label>
              <select id="property-type" defaultValue="Any">
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="property-field">
              <label htmlFor="property-sort">Sort By</label>
              <select id="property-sort" defaultValue="Newest">
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Second row, first column: Bedrooms and Baths */}
            <div className="property-search-pair">
              <div className="property-field">
                <label htmlFor="property-bedrooms">Bedrooms</label>
                <select
                  id="property-bedrooms"
                  defaultValue="Any Number"
                >
                  {bedroomOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="property-field">
                <label htmlFor="property-bathrooms">Baths</label>
                <select
                  id="property-bathrooms"
                  defaultValue="Any Number"
                >
                  {bathroomOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Second row, second column: Min and Max Price */}
            <div className="property-search-pair">
              <div className="property-field property-price-field">
                <label htmlFor="property-min-price">Min Price</label>
                <input
                  id="property-min-price"
                  type="number"
                  min="0"
                  placeholder="0"
                />
              </div>

              <div className="property-field property-price-field">
                <label htmlFor="property-max-price">Max Price</label>
                <input
                  id="property-max-price"
                  type="number"
                  min="0"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Second row, third column: Search button */}
            <button
              className="property-search-button"
              type="submit"
            >
              Search Now <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PropertySearch;
