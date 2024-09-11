<template>
  <Card>
    <template #title>
      About Peru
    </template>
    <div class="card-content" v-if="country">
      <img :src="country.flags.png" alt="Flag of Peru" />
      <img :src="country.coatOfArms.png" alt="Coat of Arms of Peru" />
      <p><strong>Common Name:</strong> {{ country.name.common }}</p>
      <p><strong>Official Name:</strong> {{ country.name.official }}</p>
      <p><strong>Currency:</strong> {{ country.currencies.PEN.name }} ({{ country.currencies.PEN.symbol }})</p>
      <p><strong>Capital:</strong> {{ country.capital[0] }}</p>
      <p><strong>Region:</strong> {{ country.region }}</p>
      <p><strong>Subregion:</strong> {{ country.subregion }}</p>
      <p><strong>Languages:</strong> {{ Object.values(country.languages).join(', ') }}</p>
      <p><strong>Area:</strong> {{ country.area }} km²</p>
      <p><strong>Population:</strong> {{ country.population }}</p>
    </div>
    <div v-else>
      <p>Loading country information...</p>
    </div>
  </Card>
</template>

<script>
import {ref, onMounted} from 'vue';
import countryService from '../../services/countryService.js';

export default {
  name: 'AboutPeru',
  setup() {
    const country = ref(null); // Initialize as null for loading state

    onMounted(async () => {
      try {
        const response = await countryService.getCountryInfo('peru');
        country.value = response[0]; // Assuming the response is an array
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    });

    return {country};
  }
}
</script>

<style scoped>
.card-content {
  text-align: left;
}
</style>