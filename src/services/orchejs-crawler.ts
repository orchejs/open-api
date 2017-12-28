import { FileMatcher, FindOptions } from 'file-matcher';

/**
 * Looks for all files with the route decorator. If a file has this decorator means that it is an
 * orchejs endpoint.
 *
 * @param directory - directory to search for files.
 */
function decoratorCrawler(directory: string): Promise<string[]> {
  const matcher = new FileMatcher();
  return matcher.find({
    path: directory,
    recursiveSearch: true,
    fileFilter: {
      content: /@route\(/g,
      fileNamePattern: [
        '**/*.ts',
        '!decorator.loader*',
        '!orchejs-crawler*',
        '!node_modules',
        '!typings'
      ]
    }
  });
}
