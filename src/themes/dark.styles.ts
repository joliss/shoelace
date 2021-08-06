import { css } from 'lit';

export default css`
  :host,
  .sl-theme-dark {
    /* Blue Gray */
    --sl-color-blue-gray-950: 248 250 252;
    --sl-color-blue-gray-900: 241 245 249;
    --sl-color-blue-gray-800: 226 232 240;
    --sl-color-blue-gray-700: 203 213 225;
    --sl-color-blue-gray-600: 148 163 184;
    --sl-color-blue-gray-500: 100 116 139;
    --sl-color-blue-gray-400: 71 85 105;
    --sl-color-blue-gray-300: 51 65 85;
    --sl-color-blue-gray-200: 30 41 59;
    --sl-color-blue-gray-100: 15 23 42;
    --sl-color-blue-gray-50: 10 16 30;

    /* Cool Gray */
    --sl-color-cool-gray-950: 249 250 251;
    --sl-color-cool-gray-900: 243 244 246;
    --sl-color-cool-gray-800: 229 231 235;
    --sl-color-cool-gray-700: 209 213 219;
    --sl-color-cool-gray-600: 156 163 175;
    --sl-color-cool-gray-500: 107 114 128;
    --sl-color-cool-gray-400: 75 85 99;
    --sl-color-cool-gray-300: 55 65 81;
    --sl-color-cool-gray-200: 31 41 55;
    --sl-color-cool-gray-100: 17 24 39;
    --sl-color-cool-gray-50: 12 17 29;

    /* Gray */
    --sl-color-gray-950: 250 250 250;
    --sl-color-gray-900: 244 244 245;
    --sl-color-gray-800: 228 228 231;
    --sl-color-gray-700: 212 212 216;
    --sl-color-gray-600: 161 161 170;
    --sl-color-gray-500: 113 113 122;
    --sl-color-gray-400: 82 82 91;
    --sl-color-gray-300: 63 63 70;
    --sl-color-gray-200: 39 39 42;
    --sl-color-gray-100: 24 24 27;
    --sl-color-gray-50: 19 19 22;

    /* True Gray */
    --sl-color-true-gray-950: 250 250 250;
    --sl-color-true-gray-900: 245 245 245;
    --sl-color-true-gray-800: 229 229 229;
    --sl-color-true-gray-700: 212 212 212;
    --sl-color-true-gray-600: 163 163 163;
    --sl-color-true-gray-500: 115 115 115;
    --sl-color-true-gray-400: 82 82 82;
    --sl-color-true-gray-300: 64 64 64;
    --sl-color-true-gray-200: 38 38 38;
    --sl-color-true-gray-100: 23 23 23;
    --sl-color-true-gray-50: 17 17 17;

    /* Warm Gray */
    --sl-color-warm-gray-950: 250 250 249;
    --sl-color-warm-gray-900: 245 245 244;
    --sl-color-warm-gray-800: 231 229 228;
    --sl-color-warm-gray-700: 214 211 209;
    --sl-color-warm-gray-600: 168 162 158;
    --sl-color-warm-gray-500: 120 113 108;
    --sl-color-warm-gray-400: 87 83 78;
    --sl-color-warm-gray-300: 68 64 60;
    --sl-color-warm-gray-200: 41 37 36;
    --sl-color-warm-gray-100: 28 25 23;
    --sl-color-warm-gray-50: 19 18 16;

    /* Red */
    --sl-color-red-950: 254 242 242;
    --sl-color-red-900: 254 226 226;
    --sl-color-red-800: 254 202 202;
    --sl-color-red-700: 252 165 165;
    --sl-color-red-600: 248 113 113;
    --sl-color-red-500: 239 68 68;
    --sl-color-red-400: 220 38 38;
    --sl-color-red-300: 185 28 28;
    --sl-color-red-200: 153 27 27;
    --sl-color-red-100: 127 29 29;
    --sl-color-red-50: 80 20 20;

    /* Orange */
    --sl-color-orange-950: 255 247 237;
    --sl-color-orange-900: 255 237 213;
    --sl-color-orange-800: 254 215 170;
    --sl-color-orange-700: 253 186 116;
    --sl-color-orange-600: 251 146 60;
    --sl-color-orange-500: 249 115 22;
    --sl-color-orange-400: 234 88 12;
    --sl-color-orange-300: 194 65 12;
    --sl-color-orange-200: 154 52 18;
    --sl-color-orange-100: 124 45 18;
    --sl-color-orange-50: 82 32 15;

    /* Amber */
    --sl-color-amber-950: 255 251 235;
    --sl-color-amber-900: 254 243 199;
    --sl-color-amber-800: 253 230 138;
    --sl-color-amber-700: 252 211 77;
    --sl-color-amber-600: 251 191 36;
    --sl-color-amber-500: 245 158 11;
    --sl-color-amber-400: 217 119 6;
    --sl-color-amber-300: 180 83 9;
    --sl-color-amber-200: 146 64 14;
    --sl-color-amber-100: 120 53 15;
    --sl-color-amber-50: 74 35 11;

    /* Yellow */
    --sl-color-yellow-950: 254 252 232;
    --sl-color-yellow-900: 254 249 195;
    --sl-color-yellow-800: 254 240 138;
    --sl-color-yellow-700: 253 224 71;
    --sl-color-yellow-600: 250 204 21;
    --sl-color-yellow-500: 234 179 8;
    --sl-color-yellow-400: 202 138 4;
    --sl-color-yellow-300: 161 98 7;
    --sl-color-yellow-200: 133 77 14;
    --sl-color-yellow-100: 113 63 18;
    --sl-color-yellow-50: 60 38 11;

    /* Lime */
    --sl-color-lime-950: 247 254 231;
    --sl-color-lime-900: 236 252 203;
    --sl-color-lime-800: 217 249 157;
    --sl-color-lime-700: 190 242 100;
    --sl-color-lime-600: 163 230 53;
    --sl-color-lime-500: 132 204 22;
    --sl-color-lime-400: 101 163 13;
    --sl-color-lime-300: 77 124 15;
    --sl-color-lime-200: 63 98 18;
    --sl-color-lime-100: 54 83 20;
    --sl-color-lime-50: 38 57 14;

    /* Green */
    --sl-color-green-950: 240 253 244;
    --sl-color-green-900: 220 252 231;
    --sl-color-green-800: 187 247 208;
    --sl-color-green-700: 134 239 172;
    --sl-color-green-600: 74 222 128;
    --sl-color-green-500: 34 197 94;
    --sl-color-green-400: 22 163 74;
    --sl-color-green-300: 21 128 61;
    --sl-color-green-200: 22 101 52;
    --sl-color-green-100: 20 83 45;
    --sl-color-green-50: 12 49 27;

    /* Emerald */
    --sl-color-emerald-950: 236 253 245;
    --sl-color-emerald-900: 209 250 229;
    --sl-color-emerald-800: 167 243 208;
    --sl-color-emerald-700: 110 231 183;
    --sl-color-emerald-600: 52 211 153;
    --sl-color-emerald-500: 16 185 129;
    --sl-color-emerald-400: 5 150 105;
    --sl-color-emerald-300: 4 120 87;
    --sl-color-emerald-200: 6 95 70;
    --sl-color-emerald-100: 6 78 59;
    --sl-color-emerald-50: 3 45 34;

    /* Teal */
    --sl-color-teal-950: 240 253 250;
    --sl-color-teal-900: 204 251 241;
    --sl-color-teal-800: 153 246 228;
    --sl-color-teal-700: 94 234 212;
    --sl-color-teal-600: 45 212 191;
    --sl-color-teal-500: 20 184 166;
    --sl-color-teal-400: 13 148 136;
    --sl-color-teal-300: 15 118 110;
    --sl-color-teal-200: 17 94 89;
    --sl-color-teal-100: 19 78 74;
    --sl-color-teal-50: 12 46 44;

    /* Cyan */
    --sl-color-cyan-950: 236 254 255;
    --sl-color-cyan-900: 207 250 254;
    --sl-color-cyan-800: 165 243 252;
    --sl-color-cyan-700: 103 232 249;
    --sl-color-cyan-600: 34 211 238;
    --sl-color-cyan-500: 6 182 212;
    --sl-color-cyan-400: 8 145 178;
    --sl-color-cyan-300: 14 116 144;
    --sl-color-cyan-200: 21 94 117;
    --sl-color-cyan-100: 22 78 99;
    --sl-color-cyan-50: 16 52 66;

    /* Sky */
    --sl-color-sky-950: 240 249 255;
    --sl-color-sky-900: 224 242 254;
    --sl-color-sky-800: 186 230 253;
    --sl-color-sky-700: 125 211 252;
    --sl-color-sky-600: 56 189 248;
    --sl-color-sky-500: 14 165 233;
    --sl-color-sky-400: 2 132 199;
    --sl-color-sky-300: 3 105 161;
    --sl-color-sky-200: 7 89 133;
    --sl-color-sky-100: 12 74 110;
    --sl-color-sky-50: 11 50 73;

    /* Blue */
    --sl-color-blue-950: 239 246 255;
    --sl-color-blue-900: 219 234 254;
    --sl-color-blue-800: 191 219 254;
    --sl-color-blue-700: 147 197 253;
    --sl-color-blue-600: 96 165 250;
    --sl-color-blue-500: 59 130 246;
    --sl-color-blue-400: 37 99 235;
    --sl-color-blue-300: 29 78 216;
    --sl-color-blue-200: 30 64 175;
    --sl-color-blue-100: 30 58 138;
    --sl-color-blue-50: 21 33 73;

    /* Indigo */
    --sl-color-indigo-950: 238 242 255;
    --sl-color-indigo-900: 224 231 255;
    --sl-color-indigo-800: 199 210 254;
    --sl-color-indigo-700: 165 180 252;
    --sl-color-indigo-600: 129 140 248;
    --sl-color-indigo-500: 99 102 241;
    --sl-color-indigo-400: 79 70 229;
    --sl-color-indigo-300: 67 56 202;
    --sl-color-indigo-200: 55 48 163;
    --sl-color-indigo-100: 49 46 129;
    --sl-color-indigo-50: 36 33 84;

    /* Violet */
    --sl-color-violet-950: 245 243 255;
    --sl-color-violet-900: 237 233 254;
    --sl-color-violet-800: 221 214 254;
    --sl-color-violet-700: 196 181 253;
    --sl-color-violet-600: 167 139 250;
    --sl-color-violet-500: 139 92 246;
    --sl-color-violet-400: 124 58 237;
    --sl-color-violet-300: 109 40 217;
    --sl-color-violet-200: 91 33 182;
    --sl-color-violet-100: 76 29 149;
    --sl-color-violet-50: 49 21 88;

    /* Purple */
    --sl-color-purple-950: 250 245 255;
    --sl-color-purple-900: 243 232 255;
    --sl-color-purple-800: 233 213 255;
    --sl-color-purple-700: 216 180 254;
    --sl-color-purple-600: 192 132 252;
    --sl-color-purple-500: 168 85 247;
    --sl-color-purple-400: 147 51 234;
    --sl-color-purple-300: 126 34 206;
    --sl-color-purple-200: 107 33 168;
    --sl-color-purple-100: 88 28 135;
    --sl-color-purple-50: 47 17 67;

    /* Fuchsia */
    --sl-color-fuchsia-950: 253 244 255;
    --sl-color-fuchsia-900: 250 232 255;
    --sl-color-fuchsia-800: 245 208 254;
    --sl-color-fuchsia-700: 240 171 252;
    --sl-color-fuchsia-600: 232 121 249;
    --sl-color-fuchsia-500: 217 70 239;
    --sl-color-fuchsia-400: 192 38 211;
    --sl-color-fuchsia-300: 162 28 175;
    --sl-color-fuchsia-200: 134 25 143;
    --sl-color-fuchsia-100: 112 26 117;
    --sl-color-fuchsia-50: 56 16 58;

    /* Pink */
    --sl-color-pink-950: 253 242 248;
    --sl-color-pink-900: 252 231 243;
    --sl-color-pink-800: 251 207 232;
    --sl-color-pink-700: 249 168 212;
    --sl-color-pink-600: 244 114 182;
    --sl-color-pink-500: 236 72 153;
    --sl-color-pink-400: 219 39 119;
    --sl-color-pink-300: 190 24 93;
    --sl-color-pink-200: 157 23 77;
    --sl-color-pink-100: 131 24 67;
    --sl-color-pink-50: 67 14 35;

    /* Rose */
    --sl-color-rose-950: 255 241 242;
    --sl-color-rose-900: 255 228 230;
    --sl-color-rose-800: 254 205 211;
    --sl-color-rose-700: 253 164 175;
    --sl-color-rose-600: 251 113 133;
    --sl-color-rose-500: 244 63 94;
    --sl-color-rose-400: 225 29 72;
    --sl-color-rose-300: 190 18 60;
    --sl-color-rose-200: 159 18 57;
    --sl-color-rose-100: 136 19 55;
    --sl-color-rose-50: 74 13 32;

    /* Neutral one-offs */
    --sl-color-neutral-0: 255 255 255;
    --sl-color-neutral-1000: var(--sl-color-gray-50);
  }
`;
