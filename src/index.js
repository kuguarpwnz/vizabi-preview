import './assets/css/main.scss';

import 'font-awesome/css/font-awesome.min.css';

import 'font-awesome/fonts/FontAwesome.otf';
import 'font-awesome/fonts/fontawesome-webfont.eot';
import 'font-awesome/fonts/fontawesome-webfont.svg';
import 'font-awesome/fonts/fontawesome-webfont.ttf';
import 'font-awesome/fonts/fontawesome-webfont.woff';
import 'font-awesome/fonts/fontawesome-webfont.woff2';

import 'vizabi-ddfcsv-reader/dist/vizabi-ddfcsv-reader';
import 'vizabi-ws-reader/dist/bundle.web';
import 'd3/build/d3';

require('url-search-params-polyfill');

const requirePugTemplates = require.context('./tools', false, /\.pug$/);
requirePugTemplates.keys().forEach(requirePugTemplates);

const requireChartConfigs = require.context('vizabi-config-systema_globalis', false, /\.json$/);
requireChartConfigs.keys().forEach(requireChartConfigs);

const requireJsAssets = require.context('./assets/js', true, /\.js$/);
requireJsAssets.keys().forEach(requireJsAssets);