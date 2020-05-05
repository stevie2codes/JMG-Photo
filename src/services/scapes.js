const landscapes = [
  {
    id: 1,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588174751/DSC_3731-Edit_ifqqg0.jpg`,
    type: "landscape"
  },
  {
    id: 2,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1587574800/green-road.jpg`,
    type: "landscape"
  },
  {
    id: 3,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588137287/jg-photo/DSC_3309-Edit_aijgpi.jpg`,
    type: "landscape"
  },
  {
    id: 4,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1587569997/jg-photo/heroLights.jpg`,
    type: "landscape"
  },
  {
    id: 5,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1587573385/jg-photo/DSC_2178-Edit_1_eduixl.jpg`,
    type: "portrait"
  },
  {
    id: 6,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1587572484/jg-photo/DSC_2200-Edit-2-Edit_1_vsy0br.jpg`,
    type: "portrait"
  },
  {
    id: 7,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562746/jg-photo/DSC_3577-Edit_yo1osi.jpg`,
    type: "landscape"
  },
  {
    id: 8,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562746/jg-photo/DSC_3882-Edit_lyrgjd.jpg`,
    type: "landscape"
  },
  {
    id: 9,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562746/jg-photo/DSC_3779-Edit_u48hvg.jpg`,
    type: "landscape"
  },
  {
    id: 10,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562746/jg-photo/DSC_2997_klrzqf.jpg`,
    type: "landscape"
  },
  {
    id: 11,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562731/jg-photo/DSC_2805_sxsdlh.jpg`,
    type: "landscape"
  },
  {
    id: 12,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562731/jg-photo/DSC_2747-Edit_fszolt.jpg`,
    type: "landscape"
  },
  {
    id: 13,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562731/jg-photo/DSC_2715-Edit_thfi9s.jpg`,
    type: "portrait"
  },
  {
    id: 14,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562731/jg-photo/DSC_2787-Edit_qafjgx.jpg`,
    type: "landscape"
  },
  {
    id: 15,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562731/jg-photo/DSC_2443_yfc5lt.jpg`,
    type: "landscape"
  },
  {
    id: 16,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562731/jg-photo/DSC_2398_wxdswk.jpg`,
    type: "landscape"
  },
  {
    id: 17,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562730/jg-photo/DSC_2387_pnznvf.jpg`,
    type: "landscape"
  },
  {
    id: 18,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562730/jg-photo/DSC_2007_pfmsah.jpg`,
    type: "portrait"
  },
  {
    id: 19,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562730/jg-photo/DSC_2391_g3yvfq.jpg`,
    type: "portrait"
  },
  {
    id: 20,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562728/jg-photo/DSC_1690_kfuxtc.jpg`,
    type: "landscape"
  },
  {
    id: 21,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562728/jg-photo/DSC_1702_fmt7yn.jpg`,
    type: "landscape"
  },
  {
    id: 22,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562728/jg-photo/DSC_1874-Edit_vgltlt.jpg`,
    type: "portrait"
  },
  {
    id: 23,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562704/jg-photo/DSC_1489-Edit_x7vdrg.jpg`,
    type: "portrait"
  },
  {
    id: 24,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562700/jg-photo/DSC_0260_jugv1z.jpg`,
    type: "portrait"
  },
  {
    id: 25,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562728/jg-photo/DSC_1703_qnbxkz.jpg`,
    type: "landscape"
  },
  {
    id: 26,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562728/jg-photo/DSC_1689_z2azxk.jpg`,
    type: "landscape"
  },
  {
    id: 27,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562728/jg-photo/DSC_1675_bl5sxq.jpg`,
    type: "landscape"
  },
  {
    id: 28,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562704/jg-photo/DSC_1497_chdpq5.jpg`,
    type: "landscape"
  },
  {
    id: 29,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_1484_altqgv.jpg`,
    type: "landscape"
  },
  {
    id: 30,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_1479_yqcfsb.jpg`,
    type: "landscape"
  },
  {
    id: 31,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_1461-Edit-Edit_zd7hqm.jpg`,
    type: "landscape"
  },
  {
    id: 32,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_1432_kybvuo.jpg`,
    type: "landscape"
  },
  {
    id: 33,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_1457_smi2jx.jpg`,
    type: "landscape"
  },
  {
    id: 34,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_1036-Edit_x9hhww.jpg`,
    type: "landscape"
  },
  {
    id: 35,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_0914_rcslgi.jpg`,
    type: "landscape"
  },
  {
    id: 36,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_1066_vnqnr7.jpg`,
    type: "landscape"
  },
  {
    id: 37,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_0716_ccgwy2.jpg`,
    type: "landscape"
  },
  {
    id: 38,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_0662-Edit_q6al3j.jpg`,
    type: "landscape"
  },
  {
    id: 39,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562700/jg-photo/DSC_0344_vzvrxy.jpg`,
    type: "landscape"
  },
  {
    id: 40,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562700/jg-photo/DSC_0518-Edit_hnbw9y.jpg`,
    type: "landscape"
  },
  {
    id: 41,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562700/jg-photo/DSC_0250_cvom68.jpg`,
    type: "landscape"
  },
  {
    id: 42,
    image: `https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562700/jg-photo/DSC_0543_ntbnnk.jpg`,
    type: "landscape"
  }
];

export function getLandscapes() {
  return landscapes;
}
