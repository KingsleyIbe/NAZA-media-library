const photos = () => Promise.resolve({
  data: [
    {
      center: 'JPL',
      title: 'Heating Martian Sand Grains',
      nasa_id: 'PIA16573',
      date_created: '2012-12-03T17:00:06Z',
      keywords: [
        'Mars',
        'Mars Science Laboratory MSL',
      ],
      media_type: 'image',
      description_508: 'This plot of data from NASA Mars rover Curiosity shows the variety of gases that were released from sand grains upon heating in the Sample Analysis at Mars instrument, or SAM.',
      secondary_creator: 'NASA/JPL-Caltech/GSFC',
      description: 'This plot of data from NASA Mars rover Curiosity shows the variety of gases that were released from sand grains upon heating in the Sample Analysis at Mars instrument, or SAM.',
    },
    {
      center: 'JPL',
      title: 'Gravity of the Moon Crust',
      nasa_id: 'PIA16578',
      date_created: '2012-12-05T17:00:01Z',
      keywords: [
        'Moon',
        'Gravity Recovery and Interior Laboratory GRAIL',
      ],
      media_type: 'image',
      description_508: 'These maps of the moon show the Bouguer gravity anomalies as measured by NASA GRAIL mission. Red areas have stronger gravity, while blue areas have weaker gravity.',
      secondary_creator: 'NASA/JPL-Caltech/CSM',
      description: 'These maps of the moon show the Bouguer gravity anomalies as measured by NASA GRAIL mission. Red areas have stronger gravity, while blue areas have weaker gravity.',
    },
  ],
});

export default photos;
