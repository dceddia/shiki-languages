export declare type TCommonLang = 'clojure' | 'c' | 'cpp' | 'csharp' | 'css' | 'go' | 'html' | 'jade' | 'java' | 'jsx' | 'javascript' | 'json' | 'jsonc' | 'less' | 'lua' | 'makefile' | 'markdown' | 'objective-c' | 'perl6' | 'php' | 'python' | 'r' | 'ruby' | 'rust' | 'scss' | 'shellscript' | 'sql' | 'svelte' | 'swift' | 'typescript' | 'tsx' | 'xml' | 'yaml'
/**
 * Extra grammars
 */
 | 'haml' | 'graphql' | 'postcss' | 'sass' | 'stylus' | 'vue' | 'vue-html' | 'latex' | 'toml';
export declare type TCommonLangAlias = 'clj' | 'c++' | 'htm' | 'xhtml' | 'js' | 'objc' | 'py' | 'rb' | 'shell' | 'bash' | 'sh' | 'zsh' | 'ts' | 'yml' | 'md'
/**
 * Extra grammars
 */
 | 'styl' | 'tex';
export declare type TOtherLang = 'bat' | 'coffeescript' | 'diff' | 'dockerfile' | 'fsharp' | 'git-commit' | 'git-rebase' | 'groovy' | 'handlebars' | 'ini' | 'properties' | 'perl' | 'powershell' | 'razor' | 'shaderlab' | 'vb' | 'cmd' | 'xsl';
export declare type TLang = TCommonLang | TCommonLangAlias | TOtherLang;
