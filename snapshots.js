
const included = [

    // base

    'R',
    'base',
    'compiler',
    'datasets',
    'graphics',
    'grDevices',
    'grid',
    'methods',
    'parallel',
    'splines',
    'stats',
    'stats4',
    'tcltk',
    'utils',
    'tools',

    // recommended

    'KernSmooth',
    'MASS',
    'Matrix',
    'boot',
    'class',
    'cluster',
    'codetools',
    'foreign',
    'lattice',
    'mgcv',
    'nlme',
    'nnet',
    'rpart',
    'spatial',
    'survival',
];

const R402base = included.concat([
    'jmvcore',
    'R6',
    'RColorBrewer',
    'base64enc',
    'bitops',
    'curl',
    'fansi',
    'farver',
    'highr',
    'labeling',
    'magrittr',
    'praise',
    'prettyunits',
    'rlang',
    'rstudioapi',
    'systemfonts',
    'utf8',
    'viridisLite',
    'yaml',
    'RCurl',
    'Rcpp',
    'assertthat',
    'backports',
    'colorspace',
    'crayon',
    'digest',
    'ellipsis',
    'evaluate',
    'glue',
    'gtable',
    'jsonlite',
    'mime',
    'pkgconfig',
    'ps',
    'ragg',
    'remotes',
    'stringi',
    'withr',
    'xfun',
    'RInside',
    'RProtoBuf',
    'cli',
    'htmltools',
    'lifecycle',
    'markdown',
    'munsell',
    'processx',
    'rprojroot',
    'stringr',
    'tinytex',
    'vctrs',
    'callr',
    'desc',
    'knitr',
    'pillar',
    'scales',
    'pkgbuild',
    'rmarkdown',
    'tibble',
    'pkgload',
    'testthat',
    'isoband',
    'ggplot2',
]);

const R402jmv = R402base.concat([
    'GPArotation',
    'RcppParallel',
    'ca',
    'carData',
    'contfrac',
    'cpp11',
    'glasso',
    'jpeg',
    'lisrelToR',
    'matrixStats',
    'matrixcalc',
    'nloptr',
    'numDeriv',
    'pbivnorm',
    'png',
    'polyclip',
    'qvcalc',
    'rematch',
    'rjson',
    'tmvnsim',
    'truncnorm',
    'whisker',
    'zip',
    'Formula',
    'MatrixModels',
    'PMCMR',
    'RUnit',
    'RcppArmadillo',
    'RcppEigen',
    'Rsolnp',
    'SparseM',
    'TH.data',
    'XML',
    'abind',
    'caTools',
    'cellranger',
    'checkmate',
    'clipr',
    'coda',
    'corpcor',
    'data.table',
    'deSolve',
    'elliptic',
    'estimability',
    'fdrtool',
    'forcats',
    'generics',
    'ggrepel',
    'gridExtra',
    'gtools',
    'hms',
    'htmlwidgets',
    'igraph',
    'latticeExtra',
    'minqa',
    'mnormt',
    'mvnormtest',
    'mvtnorm',
    'openxlsx',
    'pbapply',
    'plyr',
    'purrr',
    'relimp',
    'sp',
    'ssanv',
    'statmod',
    'tweenr',
    'xtable',
    'zoo',
    'BDgraph',
    'StanHeaders',
    'conquer',
    'd3Network',
    'emmeans',
    'exactci',
    'gdata',
    'ggridges',
    'gnm',
    'graphlayouts',
    'htmlTable',
    'huge',
    'hypergeo',
    'kutils',
    'lavaan',
    'lme4',
    'lmtest',
    'maptools',
    'progress',
    'psych',
    'readr',
    'reshape',
    'reshape2',
    'rpf',
    'sandwich',
    'tidyselect',
    'viridis',
    'BayesFactor',
    'GGally',
    'Hmisc',
    'OpenMx',
    'dplyr',
    'exact2x2',
    'ggforce',
    'gplots',
    'haven',
    'lmerTest',
    'multcomp',
    'pbkrtest',
    'quantreg',
    'readxl',
    'regsem',
    'rockchalk',
    'vcd',
    'ROCR',
    'arm',
    'rio',
    'tidyr',
    'vcdExtra',
    'car',
    'mi',
    'tidygraph',
    'afex',
    'ggraph',
    'sem',
    'qgraph',
    'semPlot',
]);

const R405base = included.concat([
    'jmvcore',
    'R6',
    'RColorBrewer',
    'base64enc',
    'bitops',
    'brio',
    'cpp11',
    'curl',
    'fansi',
    'farver',
    'highr',
    'magrittr',
    'praise',
    'prettyunits',
    'rprojroot',
    'rstudioapi',
    'utf8',
    'viridisLite',
    'yaml',
    'RCurl',
    'Rcpp',
    'assertthat',
    'colorspace',
    'crayon',
    'digest',
    'evaluate',
    'glue',
    'gtable',
    'isoband',
    'jsonlite',
    'labeling',
    'mime',
    'pkgconfig',
    'ps',
    'remotes',
    'rlang',
    'stringi',
    'systemfonts',
    'withr',
    'xfun',
    'RInside',
    'RProtoBuf',
    'cli',
    'desc',
    'diffobj',
    'ellipsis',
    'htmltools',
    'lifecycle',
    'markdown',
    'munsell',
    'processx',
    'stringr',
    'textshaping',
    'tinytex',
    'callr',
    'knitr',
    'ragg',
    'scales',
    'vctrs',
    'pillar',
    'pkgbuild',
    'rmarkdown',
    'pkgload',
    'tibble',
    'ggplot2',
    'rematch2',
    'waldo',
    'testthat',
]);

const R405jmv = R405base.concat([
    'GPArotation',
    'RcppParallel',
    'backports',
    'ca',
    'carData',
    'contfrac',
    'glasso',
    'jpeg',
    'lisrelToR',
    'matrixStats',
    'matrixcalc',
    'nloptr',
    'numDeriv',
    'pbivnorm',
    'png',
    'qvcalc',
    'rematch',
    'tmvnsim',
    'truncnorm',
    'zip',
    'Formula',
    'MatrixModels',
    'PMCMR',
    'RUnit',
    'RcppArmadillo',
    'RcppEigen',
    'Rsolnp',
    'SparseM',
    'TH.data',
    'XML',
    'abind',
    'caTools',
    'cellranger',
    'checkmate',
    'clipr',
    'coda',
    'corpcor',
    'data.table',
    'deSolve',
    'elliptic',
    'estimability',
    'fdrtool',
    'forcats',
    'generics',
    'gridExtra',
    'gtools',
    'hms',
    'htmlwidgets',
    'igraph',
    'latticeExtra',
    'minqa',
    'mnormt',
    'mvnormtest',
    'mvtnorm',
    'openxlsx',
    'pbapply',
    'plyr',
    'purrr',
    'relimp',
    'sp',
    'ssanv',
    'statmod',
    'xtable',
    'zoo',
    'StanHeaders',
    'conquer',
    'emmeans',
    'exactci',
    'ggridges',
    'gnm',
    'gplots',
    'htmlTable',
    'hypergeo',
    'kutils',
    'lavaan',
    'lme4',
    'lmtest',
    'maptools',
    'progress',
    'psych',
    'readr',
    'reshape',
    'reshape2',
    'rpf',
    'sandwich',
    'tidyselect',
    'viridis',
    'BayesFactor',
    'Hmisc',
    'OpenMx',
    'ROCR',
    'dplyr',
    'exact2x2',
    'haven',
    'lmerTest',
    'multcomp',
    'quantreg',
    'readxl',
    'regsem',
    'rockchalk',
    'vcd',
    'arm',
    'qgraph',
    'rio',
    'tidyr',
    'vcdExtra',
    'GGally',
    'broom',
    'mi',
    'pbkrtest',
    'sem',
    'car',
    'semPlot',
    'afex',
]);

module.exports = {
    '4.0.2': {
        mran_url: 'https://cran.microsoft.com/snapshot/2020-08-24',
        base_packages: R402base,
        jmv_packages: R402jmv,
    },
    '4.0.5': {
        mran_url: 'https://cran.microsoft.com/snapshot/2021-04-01',
        base_packages: R405base,
        jmv_packages: R405jmv,
    },
};
