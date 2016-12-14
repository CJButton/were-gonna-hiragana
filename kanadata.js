


class Kana {
  constructor() {
  }

  kCharacters() {
    return(
    {
            1: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479352414/ka_uocs0v.png", eChar: "ka ", pChar: "kah"},
            2: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479352414/ki_y8ksg2.png", eChar: "ki ", pChar: "key"},
            3: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479352414/ku_kzg5ed.png", eChar: "ku ", pChar: "coo"},
            4: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479351370/ke_z32cwf.png", eChar: "ke ", pChar: "keh"},
            5: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479351370/ko_hhfgn5.png", eChar: "ko ", pChar: "coh"},
            next: "sCharacters"
              }
            );
          }
  sCharacters() {
    return(
    {
            1: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/sa_htynpp.png", eChar: "sa ", pChar: "sah"},
            2: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/shi_wtqdkp.png", eChar: "shi", pChar: "she"},
            3: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/su_u9seqb.png", eChar: "su ", pChar: "sue"},
            4: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/se_g30gro.png", eChar: "se ", pChar: "seh"},
            5: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/so_bnc9lz.png", eChar: "so ", pChar: "sew"},
            next: "vowelCharacters"
        }
      );
    }

    vowelCharacters() {
      return(
        {
          1: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/a_hlgvcs.png", eChar: " a ", pChar: "ah "},
          2: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/i_rfcpyd.png", eChar: " i ", pChar: " E "},
          3: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/u_oii9zi.png", eChar: " u ", pChar: "ew"},
          4: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/e_dvxlrk.png", eChar: " e ", pChar: "eh "},
          5: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/o_esyro6.png", eChar: " o ", pChar: " O "},
          next: "nCharacters"
        }
      );
    }

    nCharacters() {
      return(
        {
          1: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673359/na_kexxr8.png", eChar: "na ", pChar: "nah"},
          2: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673359/ni_tlzrlv.png", eChar: "ni ", pChar: "nee"},
          3: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/nu_ycinco.png", eChar: "nu ", pChar: "new"},
          4: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/ne_dmmf73.png", eChar: "ne ", pChar: "neh"},
          5: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/no_rrxroz.png", eChar: "no ", pChar: "no "},
          next: "hCharacters"
        }
      );
    }

    hCharacters() {
      return(
        {
          1: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/ha_lrksae.png", eChar: "ha ", pChar: "hah"},
          2: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/hi_gbyxte.png", eChar: "hi ", pChar: "he "},
          3: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/fu_raxfow.png", eChar: "fu ", pChar: "foo"},
          4: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/he_oi0fos.png", eChar: "he ", pChar: "heh"},
          5: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1481673358/ho_cr3eo2.png", eChar: "ho ", pChar: "hoe"},
          next: "tfCharacters"
        }
      );
    }
  }

export default Kana;
