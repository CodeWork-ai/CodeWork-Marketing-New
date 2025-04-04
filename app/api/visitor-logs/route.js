import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const credentialsPath = path.resolve(process.cwd(), 'codework-454409-1544ad4a5394.json');
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

const SPREADSHEET_ID = '1AoreO8IJ3H8RUsNmVdAu8d6J97azcYDWbCliIp3MS2M';

const ispKeywords = [
  // Indian ISPs
  'airtel',
  'jio',
  'bsnl',
  'vi',
  'vodafone idea',
  'reliance communications',
  'reliance jio',
  'hathway',
  'act fibernet',
  'spectra',
  'excitel',
  'den broadband',
  'tikona',
  'you broadband',
  'netplus',
  'gtpl',
  'railwire',
  'asianet broadband',
  'siti broadband',
  'd-vois',
  'nextra broadband',
  'connect broadband',
  'airtel xtream',
  'jiofiber',
  'tata teleservices',
  'tata play fiber',
  'mtnl',
 
  // Global and generic keywords
  'vodafone',
  'idea',
  'comcast',
  'verizon',
  'at&t',
  'spectrum',
  'centurylink',
  'cox',
  'frontier',
  'telstra',
  'optus',
  'isp',
  'telecom',
  'broadband',
  'internet service',
  'network',
  'cable',
  'datacom',
  'communications',
  'telecommunications',
  'mobile',
  'wireless',
  'fiber',
  'dsl',
  'satellite',
  'provider',
  'bell',
  'rogers',
  'shaw',
  'xfinity',
  'dish',
  'sky',
  'plusnet',
  'virgin media',
  'talktalk',
  'bt',
  't-mobile',
  'singtel',
  'starlink',
  'hughesnet',
  'charter',
  'ziggo',
  'tele2',
  'o2',
  'telefonica',
  'orange',
  'vodacom',
  'mtn',
  'internet provider',
  'isp provider',
  '4g',
  '5g',
  'lte',
  'fios',
  'gigabit',
  'fiber optics',
  'broadband internet',
  'internet connection',
  'high-speed internet',
  'internet access'
];
 

export async function POST(request) {
  try {
    const {
      ip,
      timestamp,
      page,
      userAgent,
      location,
      country,
      countryCode,
      region,
      regionName,
      city,
      zip,
      latitude,
      longitude,
      timeZone,
      isp,
      company,
      as,
      proxy,
      screenResolution,
      browserLanguage,
      referrer,
    } = await request.json();

    const isISP = ispKeywords.some(keyword =>
      company.toLowerCase().includes(keyword.toLowerCase())
    );

    if (isISP) {
      return new Response(JSON.stringify({ message: 'ISP company skipped' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Proceed with logging if the company is not an ISP
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:U',
      valueInputOption: 'RAW',
      resource: {
        values: [
          [
            ip,
            timestamp,
            page,
            userAgent,
            location,
            country,
            countryCode,
            region,
            regionName,
            city,
            zip,
            latitude,
            longitude,
            timeZone,
            isp,
            company,
            as,
            proxy,
            screenResolution,
            browserLanguage,
            referrer,
          ],
        ],
      },
    });

    return new Response(JSON.stringify({ message: 'Visitor logged successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Visitor logging failed:', err);
    return new Response(JSON.stringify({ message: 'Visitor logging failed', error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}