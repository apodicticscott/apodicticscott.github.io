import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const Catppuccin: CustomThemeConfig = {
	name: 'Catppuccin',
	properties: {
     //=~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #cad3f5 
		"--color-primary-50": "247 248 254", // #f7f8fe
		"--color-primary-100": "244 246 253", // #f4f6fd
		"--color-primary-200": "242 244 253", // #f2f4fd
		"--color-primary-300": "234 237 251", // #eaedfb
		"--color-primary-400": "218 224 248", // #dae0f8
		"--color-primary-500": "202 211 245", // #cad3f5
		"--color-primary-600": "182 190 221", // #b6bedd
		"--color-primary-700": "152 158 184", // #989eb8
		"--color-primary-800": "121 127 147", // #797f93
		"--color-primary-900": "99 103 120", // #636778
		// secondary | #f4dbd6 
		"--color-secondary-50": "253 250 249", // #fdfaf9
		"--color-secondary-100": "253 248 247", // #fdf8f7
		"--color-secondary-200": "252 246 245", // #fcf6f5
		"--color-secondary-300": "251 241 239", // #fbf1ef
		"--color-secondary-400": "247 230 226", // #f7e6e2
		"--color-secondary-500": "244 219 214", // #f4dbd6
		"--color-secondary-600": "220 197 193", // #dcc5c1
		"--color-secondary-700": "183 164 161", // #b7a4a1
		"--color-secondary-800": "146 131 128", // #928380
		"--color-secondary-900": "120 107 105", // #786b69
		// tertiary | #8aadf4 
		"--color-tertiary-50": "237 243 253", // #edf3fd
		"--color-tertiary-100": "232 239 253", // #e8effd
		"--color-tertiary-200": "226 235 252", // #e2ebfc
		"--color-tertiary-300": "208 222 251", // #d0defb
		"--color-tertiary-400": "173 198 247", // #adc6f7
		"--color-tertiary-500": "138 173 244", // #8aadf4
		"--color-tertiary-600": "124 156 220", // #7c9cdc
		"--color-tertiary-700": "104 130 183", // #6882b7
		"--color-tertiary-800": "83 104 146", // #536892
		"--color-tertiary-900": "68 85 120", // #445578
		// success | #a6da95 
		"--color-success-50": "242 249 239", // #f2f9ef
		"--color-success-100": "237 248 234", // #edf8ea
		"--color-success-200": "233 246 229", // #e9f6e5
		"--color-success-300": "219 240 213", // #dbf0d5
		"--color-success-400": "193 229 181", // #c1e5b5
		"--color-success-500": "166 218 149", // #a6da95
		"--color-success-600": "149 196 134", // #95c486
		"--color-success-700": "125 164 112", // #7da470
		"--color-success-800": "100 131 89", // #648359
		"--color-success-900": "81 107 73", // #516b49
		// warning | #eed49f 
		"--color-warning-50": "252 249 241", // #fcf9f1
		"--color-warning-100": "252 246 236", // #fcf6ec
		"--color-warning-200": "251 244 231", // #fbf4e7
		"--color-warning-300": "248 238 217", // #f8eed9
		"--color-warning-400": "243 225 188", // #f3e1bc
		"--color-warning-500": "238 212 159", // #eed49f
		"--color-warning-600": "214 191 143", // #d6bf8f
		"--color-warning-700": "179 159 119", // #b39f77
		"--color-warning-800": "143 127 95", // #8f7f5f
		"--color-warning-900": "117 104 78", // #75684e
		// error | #ed8796 
		"--color-error-50": "252 237 239", // #fcedef
		"--color-error-100": "251 231 234", // #fbe7ea
		"--color-error-200": "251 225 229", // #fbe1e5
		"--color-error-300": "248 207 213", // #f8cfd5
		"--color-error-400": "242 171 182", // #f2abb6
		"--color-error-500": "237 135 150", // #ed8796
		"--color-error-600": "213 122 135", // #d57a87
		"--color-error-700": "178 101 113", // #b26571
		"--color-error-800": "142 81 90", // #8e515a
		"--color-error-900": "116 66 74", // #74424a
		// surface | #24273a 
		"--color-surface-50": "222 223 225", // #dedfe1
		"--color-surface-100": "211 212 216", // #d3d4d8
		"--color-surface-200": "200 201 206", // #c8c9ce
		"--color-surface-300": "167 169 176", // #a7a9b0
		"--color-surface-400": "102 104 117", // #666875
		"--color-surface-500": "36 39 58", // #24273a
		"--color-surface-600": "32 35 52", // #202334
		"--color-surface-700": "27 29 44", // #1b1d2c
		"--color-surface-800": "22 23 35", // #161723
		"--color-surface-900": "18 19 28", // #12131c
		
	}
}

