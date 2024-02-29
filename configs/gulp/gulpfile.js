import gulp from 'gulp';
import include from 'gulp-file-include';
import replace from 'gulp-replace';
import rename from 'gulp-rename';

const { src, dest } = gulp;

export function html() {
  return src('../../CV/src/components/index_gulp_include.html')
    .pipe(
      include({
        prefix: '@@',
        indent: true,
      }),
    )
    .pipe(replace(/="(\.\.\/){3,}/gi, '="../'))
    .pipe(rename('index.html'))
    .pipe(dest('../../CV/src/components/'));
}

// delete it if there's more than one function already (this is to prevent ESlint exception only)
export function test() {}
