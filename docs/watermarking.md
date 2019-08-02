`box watermarking`
==================

Apply a watermark on an item

* [`box watermarking:apply ITEMTYPE ITEMID`](#box-watermarkingapply-itemtype-itemid)
* [`box watermarking:get ITEMTYPE ITEMID`](#box-watermarkingget-itemtype-itemid)
* [`box watermarking:remove ITEMTYPE ITEMID`](#box-watermarkingremove-itemtype-itemid)

## `box watermarking:apply ITEMTYPE ITEMID`

Apply a watermark on an item

<!-- sample put_files_id_watermark -->
```
USAGE
  $ box watermarking:apply ITEMTYPE ITEMID

ARGUMENTS
  ITEMTYPE  (file|folder) Type of item to apply a watermark to
  ITEMID    ID of the item to apply a watermark to

OPTIONS
  -h, --help                             Show CLI help
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report
```

_See code: [src/commands/watermarking/apply.js](https://github.com/box/boxcli/blob/v2.3.0/src/commands/watermarking/apply.js)_

## `box watermarking:get ITEMTYPE ITEMID`

Get the watermark on an item

<!-- sample get_files_id_watermark -->
```
USAGE
  $ box watermarking:get ITEMTYPE ITEMID

ARGUMENTS
  ITEMTYPE  (file|folder) Type of item to get watermark for
  ITEMID    ID of the item to get watermark for

OPTIONS
  -h, --help                             Show CLI help
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report
```

_See code: [src/commands/watermarking/get.js](https://github.com/box/boxcli/blob/v2.3.0/src/commands/watermarking/get.js)_

## `box watermarking:remove ITEMTYPE ITEMID`

Remove a watermark from an item

<!-- sample delete_files_id_watermark -->
```
USAGE
  $ box watermarking:remove ITEMTYPE ITEMID

ARGUMENTS
  ITEMTYPE  (file|folder) Type of item to remove watermark from
  ITEMID    ID of the item to remove watermark from

OPTIONS
  -h, --help                             Show CLI help
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report
```

_See code: [src/commands/watermarking/remove.js](https://github.com/box/boxcli/blob/v2.3.0/src/commands/watermarking/remove.js)_
