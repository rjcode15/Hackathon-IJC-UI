// src/components/ElectionInfo.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tag, Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { incrementPoints, decrementPoints } from '../pointsActions';
import { useMediaQuery } from 'react-responsive';

const Candidate = () => {

  const [candInfo, setCandinfo] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [form] = Form.useForm();
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const dispatch = useDispatch(); 
  useEffect(()=>{
    dispatch(incrementPoints(20));
    },[])
  const candidateInfo= 
{
  "normalizedInput": {
    "line1": "1263 Pacific Avenue",
    "city": "Kansas City",
    "state": "KS",
    "zip": "66102"
  },
  "kind": "civicinfo#representativeInfoResponse",
  "divisions": {
    "ocd-division/country:us/state:ks/sldu:6": {
      "name": "Kansas State Senate district 6",
      "officeIndices": [
        10
      ]
    },
    "ocd-division/country:us": {
      "name": "United States",
      "officeIndices": [
        0,
        1
      ]
    },
    "ocd-division/country:us/state:ks/county:wyandotte": {
      "name": "Wyandotte County",
      "officeIndices": [
        13,
        14,
        15,
        16,
        17
      ]
    },
    "ocd-division/country:us/state:ks": {
      "name": "Kansas",
      "officeIndices": [
        2,
        4,
        5,
        6,
        7,
        8,
        9,
        12
      ]
    },
    "ocd-division/country:us/state:ks/county:wyandotte/council_district:2": {
      "name": "Wyandotte County Commissioner District 2",
      "officeIndices": [
        18
      ]
    },
    "ocd-division/country:us/state:ks/cd:2": {
      "name": "Kansas's 2nd congressional district",
      "officeIndices": [
        3
      ]
    },
    "ocd-division/country:us/state:ks/sldl:32": {
      "name": "Kansas State House district 32",
      "officeIndices": [
        11
      ]
    },
    "ocd-division/country:us/state:ks/place:kansas_city": {
      "name": "Kansas City city"
    }
  },
  "offices": [
    {
      "name": "President of the United States",
      "divisionId": "ocd-division/country:us",
      "levels": [
        "country"
      ],
      "roles": [
        "headOfGovernment",
        "headOfState"
      ],
      "officialIndices": [
        0
      ]
    },
    {
      "name": "Vice President of the United States",
      "divisionId": "ocd-division/country:us",
      "levels": [
        "country"
      ],
      "roles": [
        "deputyHeadOfGovernment"
      ],
      "officialIndices": [
        1
      ]
    },
    {
      "name": "U.S. Senator",
      "divisionId": "ocd-division/country:us/state:ks",
      "levels": [
        "country"
      ],
      "roles": [
        "legislatorUpperBody"
      ],
      "officialIndices": [
        2,
        3
      ]
    },
    {
      "name": "U.S. Representative",
      "divisionId": "ocd-division/country:us/state:ks/cd:2",
      "levels": [
        "country"
      ],
      "roles": [
        "legislatorLowerBody"
      ],
      "officialIndices": [
        4
      ]
    },
    {
      "name": "Governor of Kansas",
      "divisionId": "ocd-division/country:us/state:ks",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "headOfGovernment"
      ],
      "officialIndices": [
        5
      ]
    },
    {
      "name": "Lieutenant Governor of Kansas",
      "divisionId": "ocd-division/country:us/state:ks",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "deputyHeadOfGovernment"
      ],
      "officialIndices": [
        6
      ]
    },
    {
      "name": "KS State Treasurer",
      "divisionId": "ocd-division/country:us/state:ks",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "officialIndices": [
        7
      ]
    },
    {
      "name": "KS State Attorney General",
      "divisionId": "ocd-division/country:us/state:ks",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "officialIndices": [
        8
      ]
    },
    {
      "name": "KS Secretary of State",
      "divisionId": "ocd-division/country:us/state:ks",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "officialIndices": [
        9
      ]
    },
    {
      "name": "KS State Insurance Commissioner",
      "divisionId": "ocd-division/country:us/state:ks",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "officialIndices": [
        10
      ]
    },
    {
      "name": "KS State Senator",
      "divisionId": "ocd-division/country:us/state:ks/sldu:6",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "legislatorUpperBody"
      ],
      "officialIndices": [
        11
      ]
    },
    {
      "name": "KS State Representative",
      "divisionId": "ocd-division/country:us/state:ks/sldl:32",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "legislatorLowerBody"
      ],
      "officialIndices": [
        12
      ]
    },
    {
      "name": "KS State Supreme Court Justice",
      "divisionId": "ocd-division/country:us/state:ks",
      "levels": [
        "administrativeArea1"
      ],
      "roles": [
        "judge"
      ],
      "officialIndices": [
        13,
        14,
        15,
        16,
        17,
        18,
        19
      ]
    },
    {
      "name": "Mayor of Wyandotte County-Kansas City Unified Government/CEO",
      "divisionId": "ocd-division/country:us/state:ks/county:wyandotte",
      "levels": [
        "administrativeArea2"
      ],
      "roles": [
        "headOfGovernment"
      ],
      "officialIndices": [
        20
      ]
    },
    {
      "name": "Wyandotte County-Kansas City Unified Government Register of Deeds",
      "divisionId": "ocd-division/country:us/state:ks/county:wyandotte",
      "levels": [
        "administrativeArea2"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "officialIndices": [
        21
      ]
    },
    {
      "name": "Wyandotte County-Kansas City Unified Government District Attorney",
      "divisionId": "ocd-division/country:us/state:ks/county:wyandotte",
      "levels": [
        "administrativeArea2"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "officialIndices": [
        22
      ]
    },
    {
      "name": "Wyandotte County-Kansas City Unified Government Sheriff",
      "divisionId": "ocd-division/country:us/state:ks/county:wyandotte",
      "levels": [
        "administrativeArea2"
      ],
      "roles": [
        "governmentOfficer"
      ],
      "officialIndices": [
        23
      ]
    },
    {
      "name": "Wyandotte County-Kansas City Unified Government Commissioner",
      "divisionId": "ocd-division/country:us/state:ks/county:wyandotte",
      "levels": [
        "administrativeArea2"
      ],
      "roles": [
        "legislatorLowerBody"
      ],
      "officialIndices": [
        24,
        25
      ]
    },
    {
      "name": "Wyandotte County-Kansas City Unified Government Commissioner",
      "divisionId": "ocd-division/country:us/state:ks/county:wyandotte/council_district:2",
      "levels": [
        "administrativeArea2"
      ],
      "roles": [
        "legislatorLowerBody"
      ],
      "officialIndices": [
        26
      ]
    }
  ],
  "officials": [
    {
      "name": "Joseph R. Biden",
      "address": [
        {
          "line1": "1600 Pennsylvania Avenue Northwest",
          "city": "Washington",
          "state": "DC",
          "zip": "20500"
        }
      ],
      "party": "Democratic Party",
      "phones": [
        "(202) 456-1111"
      ],
      "urls": [
        "https://www.whitehouse.gov/",
        "https://en.wikipedia.org/wiki/Joe_Biden"
      ],
      "channels": [
        {
          "type": "Twitter",
          "id": "potus"
        }
      ]
    },
    {
      "name": "Kamala D. Harris",
      "address": [
        {
          "line1": "1600 Pennsylvania Avenue Northwest",
          "city": "Washington",
          "state": "DC",
          "zip": "20500"
        }
      ],
      "party": "Democratic Party",
      "phones": [
        "(202) 456-1111"
      ],
      "urls": [
        "https://www.whitehouse.gov/",
        "https://en.wikipedia.org/wiki/Kamala_Harris"
      ],
      "channels": [
        {
          "type": "Twitter",
          "id": "VP"
        }
      ]
    },
    {
      "name": "Jerry Moran",
      "address": [
        {
          "line1": "521 Dirksen Senate Office Building",
          "city": "Washington",
          "state": "DC",
          "zip": "20510"
        }
      ],
      "party": "Republican Party",
      "phones": [
        "(202) 224-6521"
      ],
      "urls": [
        "https://www.moran.senate.gov/",
        "https://en.wikipedia.org/wiki/Jerry_Moran"
      ],
      "photoUrl": "http://bioguide.congress.gov/bioguide/photo/M/M000934.jpg",
      "channels": [
        {
          "type": "Facebook",
          "id": "jerrymoran"
        },
        {
          "type": "Twitter",
          "id": "JerryMoran"
        }
      ]
    },
    {
      "name": "Roger Marshall",
      "address": [
        {
          "line1": "479A",
          "city": "Washington",
          "state": "DC",
          "zip": "20002"
        }
      ],
      "party": "Republican Party",
      "phones": [
        "(202) 224-4774"
      ],
      "urls": [
        "https://www.marshall.senate.gov/",
        "https://en.wikipedia.org/wiki/Roger_Marshall_%28politician%29"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "RogerMarshallMD"
        },
        {
          "type": "Twitter",
          "id": "repmarshall"
        }
      ]
    },
    {
      "name": "Jake LaTurner",
      "address": [
        {
          "line1": "2441 Rayburn House Office Building",
          "city": "Washington",
          "state": "DC",
          "zip": "20515"
        }
      ],
      "party": "Republican Party",
      "phones": [
        "(202) 225-6601"
      ],
      "urls": [
        "https://laturner.house.gov/",
        "https://en.wikipedia.org/wiki/Jake_LaTurner"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "CongressmanJakeLaTurner"
        },
        {
          "type": "Twitter",
          "id": "RepLaTurner"
        }
      ]
    },
    {
      "name": "Laura Kelly",
      "address": [
        {
          "line1": "300 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Democratic Party",
      "phones": [
        "(785) 296-3232"
      ],
      "urls": [
        "https://governor.kansas.gov/",
        "https://en.wikipedia.org/wiki/Laura_Kelly"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "GovLauraKelly"
        },
        {
          "type": "Twitter",
          "id": "GovLauraKelly"
        }
      ]
    },
    {
      "name": "David Toland",
      "address": [
        {
          "line1": "300 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Democratic Party",
      "phones": [
        "(785) 296-3232"
      ],
      "urls": [
        "https://governor.kansas.gov/about-the-office/lt-governor/",
        "https://en.wikipedia.org/wiki/David_Toland"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "LtGovDavidToland"
        },
        {
          "type": "Twitter",
          "id": "LtGovToland"
        }
      ]
    },
    {
      "name": "Steven Johnson",
      "address": [
        {
          "line1": "900 Southwest Jackson Street",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Republican Party",
      "phones": [
        "(785) 296-3171"
      ],
      "urls": [
        "https://www.kansasstatetreasurer.com/",
        "https://en.wikipedia.org/wiki/Steven_C._Johnson_%28Kansas_politician%29"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "KansasTreasurer"
        },
        {
          "type": "Twitter",
          "id": "kansastreasurer"
        }
      ]
    },
    {
      "name": "Kris Kobach",
      "address": [
        {
          "line1": "120 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Republican Party",
      "phones": [
        "(785) 296-2215"
      ],
      "urls": [
        "https://ag.ks.gov/",
        "https://en.wikipedia.org/wiki/Kris_Kobach"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "OAGKansas"
        },
        {
          "type": "Twitter",
          "id": "ksagoffice"
        }
      ]
    },
    {
      "name": "Scott Schwab",
      "address": [
        {
          "line1": "120 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Republican Party",
      "phones": [
        "(785) 296-4564"
      ],
      "urls": [
        "https://sos.kansas.gov/",
        "https://en.wikipedia.org/wiki/Scott_Schwab"
      ],
      "emails": [
        "sos@ks.gov"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "KansasSecretaryofState"
        },
        {
          "type": "Twitter",
          "id": "kansassos"
        }
      ]
    },
    {
      "name": "Vicki Schmidt",
      "address": [
        {
          "line1": "1300 Southwest Arrowhead Road",
          "city": "Topeka",
          "state": "KS",
          "zip": "66604"
        }
      ],
      "party": "Republican Party",
      "phones": [
        "(785) 296-3071"
      ],
      "urls": [
        "https://insurance.kansas.gov/",
        "https://en.wikipedia.org/wiki/Vicki_Schmidt"
      ],
      "emails": [
        "kid.commissioner@ks.gov"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "KSinsurancedept"
        },
        {
          "type": "Twitter",
          "id": "KSinsurancedept"
        }
      ]
    },
    {
      "name": "Pat Pettey",
      "address": [
        {
          "line1": "300 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Democratic Party",
      "phones": [
        "(785) 296-7375"
      ],
      "urls": [
        "http://www.kslegislature.org/li/b2023_24/members/sen_pettey_pat_1/",
        "https://en.wikipedia.org/wiki/Pat_Pettey"
      ],
      "photoUrl": "http://www.kslegislature.org/li/m/images/pics/sen_pettey_pat_1.jpg",
      "emails": [
        "pat.pettey@senate.ks.gov"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "PetteyForSenate"
        },
        {
          "type": "Twitter",
          "id": "senatorpettey"
        }
      ]
    },
    {
      "name": "Pam Curtis",
      "address": [
        {
          "line1": "300 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Democratic Party",
      "phones": [
        "(785) 296-7430"
      ],
      "urls": [
        "http://www.kslegislature.org/li/b2023_24/members/rep_curtis_pam_1/",
        "https://en.wikipedia.org/wiki/Pam_Curtis"
      ],
      "photoUrl": "http://www.kslegislature.org/li/m/images/pics/rep_curtis_pam_1.jpg",
      "emails": [
        "pam.curtis@house.ks.gov"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "PamCurtisKCK"
        },
        {
          "type": "Twitter",
          "id": "pcurtiskck"
        }
      ]
    },
    {
      "name": "Caleb Stegall",
      "address": [
        {
          "line1": "301 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(785) 296-3229"
      ],
      "urls": [
        "https://www.kscourts.org/About-the-Courts/Supreme-Court",
        "https://en.wikipedia.org/wiki/Caleb_Stegall"
      ],
      "emails": [
        "info@kscourts.org"
      ]
    },
    {
      "name": "Dan Biles",
      "address": [
        {
          "line1": "301 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(785) 296-3229"
      ],
      "urls": [
        "https://www.kscourts.org/About-the-Courts/Supreme-Court",
        "https://en.wikipedia.org/wiki/Daniel_Biles"
      ],
      "emails": [
        "info@kscourts.org"
      ]
    },
    {
      "name": "Eric S. Rosen",
      "address": [
        {
          "line1": "301 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(785) 296-3229"
      ],
      "urls": [
        "https://www.kscourts.org/About-the-Courts/Supreme-Court",
        "https://en.wikipedia.org/wiki/Eric_Rosen"
      ],
      "emails": [
        "info@kscourts.org"
      ]
    },
    {
      "name": "Evelyn Z. Wilson",
      "address": [
        {
          "line1": "301 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(785) 296-3229"
      ],
      "urls": [
        "https://www.kscourts.org/About-the-Courts/Supreme-Court",
        "https://en.wikipedia.org/wiki/Evelyn_Wilson"
      ],
      "emails": [
        "info@kscourts.org"
      ]
    },
    {
      "name": "Keynen \"KJ\" Wall, Jr.",
      "address": [
        {
          "line1": "301 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(785) 296-3229"
      ],
      "urls": [
        "https://www.kscourts.org/About-the-Courts/Supreme-Court",
        "https://en.wikipedia.org/wiki/K.J._Wall"
      ],
      "emails": [
        "info@kscourts.org"
      ]
    },
    {
      "name": "Marla Luckert",
      "address": [
        {
          "line1": "301 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(785) 296-3229"
      ],
      "urls": [
        "https://www.kscourts.org/About-the-Courts/Supreme-Court",
        "https://en.wikipedia.org/wiki/Marla_Luckert"
      ],
      "emails": [
        "info@kscourts.org"
      ]
    },
    {
      "name": "Melissa Taylor Standridge",
      "address": [
        {
          "line1": "301 Southwest 10th Avenue",
          "city": "Topeka",
          "state": "KS",
          "zip": "66612"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(785) 296-3229"
      ],
      "urls": [
        "https://www.kscourts.org/About-the-Courts/Supreme-Court",
        "https://en.wikipedia.org/wiki/Melissa_Standridge"
      ],
      "emails": [
        "info@kscourts.org"
      ]
    },
    {
      "name": "Tyrone Garner",
      "address": [
        {
          "line1": "701 North 7th Street Trafficway",
          "city": "Kansas City",
          "state": "KS",
          "zip": "66101"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(913) 573-5010"
      ],
      "urls": [
        "https://www.wycokck.org/Departments/Mayors-Office",
        "https://en.wikipedia.org/wiki/Tyrone_Garner_%28politician%29"
      ],
      "emails": [
        "mayorgarner@wycokck.org"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "GarnerforMayor"
        }
      ]
    },
    {
      "name": "Nancy W. Burns",
      "address": [
        {
          "line1": "701 North 7th Street Trafficway",
          "city": "Kansas City",
          "state": "KS",
          "zip": "66101"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(913) 573-2841"
      ],
      "urls": [
        "https://www.wycokck.org/Register-of-Deeds.aspx"
      ],
      "emails": [
        "nburns@wycokck.org"
      ]
    },
    {
      "name": "Mark A. Dupree, Sr.",
      "address": [
        {
          "line1": "710 North 7th Street Trafficway",
          "city": "Kansas City",
          "state": "KS",
          "zip": "66101"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(913) 573-2851"
      ],
      "urls": [
        "https://www.wycokck.org/DA.aspx"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "WYCODAOffice"
        },
        {
          "type": "Twitter",
          "id": "wycodaoffice"
        }
      ]
    },
    {
      "name": "Daniel Soptic",
      "address": [
        {
          "line1": "710 North 7th Street Trafficway",
          "city": "Kansas City",
          "state": "KS",
          "zip": "66101"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(913) 573-2861"
      ],
      "urls": [
        "https://www.wycokck.org/Departments/Sheriffs-Office"
      ],
      "emails": [
        "dsoptic@wycosheriff.org"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "Sheriffnumber1"
        },
        {
          "type": "Twitter",
          "id": "wycosheriff"
        }
      ]
    },
    {
      "name": "Melissa Bynum",
      "address": [
        {
          "line1": "701 North 7th Street Trafficway",
          "city": "Kansas City",
          "state": "KS",
          "zip": "66101"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(913) 573-5040"
      ],
      "urls": [
        "https://www.wycokck.org/Departments/County-Administrators-Office/Board-of-Commissioners/Districts/At-Large-District-1"
      ],
      "emails": [
        "mbynum@wycokck.org"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "bynumforcommission"
        },
        {
          "type": "Twitter",
          "id": "melbynum"
        }
      ]
    },
    {
      "name": "Tom Burroughs",
      "address": [
        {
          "line1": "701 North 7th Street Trafficway",
          "city": "Kansas City",
          "state": "KS",
          "zip": "66101"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(913) 573-5040"
      ],
      "urls": [
        "https://www.wycokck.org/Departments/County-Administrators-Office/Board-of-Commissioners/Districts/At-Large-District-2"
      ],
      "emails": [
        "tburroughs@wycokck.org"
      ]
    },
    {
      "name": "Brian McKiernan",
      "address": [
        {
          "line1": "701 North 7th Street Trafficway",
          "city": "Kansas City",
          "state": "KS",
          "zip": "66101"
        }
      ],
      "party": "Nonpartisan",
      "phones": [
        "(913) 573-5040"
      ],
      "urls": [
        "https://www.wycokck.org/Departments/County-Administrators-Office/Board-of-Commissioners/Districts/District-2"
      ],
      "emails": [
        "bmckiernan@wycokck.org"
      ],
      "channels": [
        {
          "type": "Facebook",
          "id": "Brian-McKiernan-Commissioner-District-2-362932557201112"
        },
        {
          "type": "Twitter",
          "id": "bmckiernan_ug2"
        }
      ]
    }
  ]
}

     
//  useEffect(() => {
//   // Fetch data from your API or use the provided data here
//   // Replace this with your API endpoint
//   fetch('http://localhost:8080/rest/getCandidateInfo?address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&key=YOUR_API_KEY')
//     .then((response) => response.json())
//     .then((data) => {
//       const extractedCandidates = [];

//       for (const office of data.offices) {
//         for (const officialIndex of office.officialIndices) {
//           const official = data.officials[officialIndex];
//           const candidate = {
//             name: official.name,
//             party: official.party,
//             phone: official.phones && official.phones[0] ? official.phones[0] : '',
//             urls: official.urls ? official.urls : [],
//             channels: official.channels ? official.channels : [],
//           };
//           extractedCandidates.push(candidate);
//         }
//       }

//       // Update the state with the extracted candidates
//       setCandidates(extractedCandidates);
//     })
//     .catch((error) => {
//       console.error('Error fetching candidate data:', error);
//     });
// }, []);
const columnsCand = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Party',
    dataIndex: 'party',
    key: 'party',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'URLs',
    dataIndex: 'urls',
    key: 'urls',
    render: (urls) => (
      <ul>
        {urls.map((url, i) => (
          <li key={i}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              URL {i + 1}
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Channels',
    dataIndex: 'channels',
    key: 'channels',
    render: (channels) => (
      <ul>
        {channels.map((channel, i) => (
          <li key={i}>
            <a href={channel.url} target="_blank" rel="noopener noreferrer">
              {channel.type}
            </a>
          </li>
        ))}
      </ul>
    ),
  },
];
 
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setZipCode(values.zipCode);
      let candidates = [];
  for (const office of candidateInfo.offices) {
    for (const officialIndex of office.officialIndices) {
      const official = candidateInfo.officials[officialIndex];
      const candidate = {
        name: official.name,
        party: official.party,
        phone: official.phones && official.phones[0] ? official.phones[0] : '',
        urls: official.urls ? official.urls : [],
        channels: official.channels ? official.channels : [],
      };
      candidates.push(candidate);
    }
  }
 setCandinfo(candidates); 
     
    } catch (error) {
      console.error('Error fetching election data:', error);
     // setElectionData(mockResponse1);
    }
  };


  return (
    <div style={{ marginLeft: "10px", marginRight: "20px", height:isSmallScreen?"150vh":"200vh",marginTop:isSmallScreen?"150px":"" }}>
      <div style={{ width: isSmallScreen?"100%":"40%" }}>
        <Form form={form} onFinish={handleSubmit}>         
            <div style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>Please Enter a Zip Code: </span>
              <span style={{ flex: 1 }}><Input placeholder="Enter Zip Code" /> </span>
              <span style={{ flex: 1 }}><Button type="primary" htmlType="submit">
                Submit</Button></span>
            </div>         
            {zipCode != "" && <><h2>Candidate  Data</h2>
        <Table columns={columnsCand} dataSource={candInfo} 
        pagination={{
          pageSize: isSmallScreen?1:5, // Increase the number of rows per page
        }}
        scroll={{ x: true }} />
        </>}
        </Form>
      </div>
      
      

    </div>
  );
};

export default Candidate;
