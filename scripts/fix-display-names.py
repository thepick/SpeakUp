#!/usr/bin/env python3
"""Rewrite displayName values in fullDataset.ts using safe string replacements."""
import re, os

DS_PATH = os.path.join("src", "data", "fullDataset.ts")

with open(DS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

NAMES = {
    1: "TH Sound: Thank You",
    2: "TH Challenge: Try These!",
    3: "TH Sounds: Think and They",
    4: "TH Sounds: Thought and Those",
    5: "V Sound: Visitors Vote",
    6: "V Sound: Very Viral",
    7: "V and End Sounds",
    8: "V vs. W: Both Lips",
    9: "S Sound: Speak Clearly",
    10: "Z Sound: Buzzing Z",
    11: "SH Sound: Shhh!",
    12: "Z Sound: Talking Fast",
    13: "CH Sound: Cheese!",
    14: "J Sound: Jump!",
    15: "CH Sound: More Practice",
    16: "J Sound: More Practice",
    17: "S + Friends: Street, Sky",
    18: "S + Friends: Stop, Speed",
    19: "S + Friends: Three Words",
    20: "S + Friends: Keep Going",
    21: "End Sounds: Say It All",
    22: "End Sounds: Final Clusters",
    23: "End Sounds: Keep the Sound",
    24: "End Sounds: Tricky Endings",
    25: "Long and Short Vowels",
    26: "Long and Short Vowels 2",
    27: "Vowel + V Sound",
    28: "V vs. F in Sentences",
    29: "Word Stress: Say It Right",
    30: "Word Stress: Strong and Weak",
    31: "Word Stress: Phrase Timing",
    32: "Word Stress: Light Syllables",
    33: "R vs. L: Try These",
    34: "R vs. L: More Words",
    35: "R vs. L: Clusters",
    36: "R vs. L: Keep Practicing",
    37: "R vs. L: Left",
    38: "R vs. L: Right",
    39: "Short I vs. Long EE",
    40: "V vs. W: Wine",
    41: "V vs. W: Vine",
    42: "V vs. W: West",
    43: "V vs. W: Vest",
    44: "S vs. X: Sick",
    45: "S vs. X: Six",
    46: "S vs. Z: Rice",
    47: "S vs. Z: Rides",
    48: "TH, R, L, and Clusters",
    49: "TH, R, L, and Clusters 2",
    50: "NG Sound: Sing!",
    51: "NG vs. N: Morning",
    52: "ZH Sound: Like a DJ",
    53: "ZH Sound: Television",
    54: "Two-Part Vowel: Day",
    55: "Two-Part Vowel: My",
    56: "Two-Part Vowel: Go",
    57: "Two-Part Vowel: Now",
    58: "Two-Part Vowel: Boy",
    59: "P vs. B: Pop and Bob",
    60: "T vs. D: Ten and Den",
    61: "K vs. G: Cap and Gap",
    62: "P, B, T, D: All Together",
    63: "P vs. B: Pear and Bear",
    64: "P vs. B: Pat and Bat",
    65: "Three-Letter Combos: Squeeze",
    66: "Three-Letter Combos: String",
    67: "Three-Letter Combos: Splash",
    68: "Three-Letter Combos: Scratch",
    69: "Linking Words Together",
    70: "Linking and Shortening",
    71: "Sounds That Change",
    72: "Sounds That Disappear",
    73: "Going Down: Falling Voice",
    74: "Going Up: Rising Voice",
    75: "WH-Questions: Voice Goes Down",
    76: "Lists: Voice Goes Up and Down",
    77: "Two-Syllable Words",
    78: "Stress Shift: Record",
    79: "Three-Syllable Words",
    80: "Compound Words: Greenhouse",
    81: "In the Classroom",
    82: "Meeting Someone New",
    83: "At the Shop",
    84: "On the Phone",
    85: "Sharing Your Ideas",
    86: "Tongue Twister: TH!",
    87: "Tongue Twister: R and L!",
    88: "Tongue Twister: V and W!",
    89: "Tongue Twister: S and SH!",
    90: "S vs. Z: Cats and Dogs",
    91: "S vs. Z: Hiss and Buzz",
    92: "CH vs. SH: Chair",
    93: "CH vs. SH: Share",
    94: "End Sounds: Cup",
    95: "End Sounds: Cub",
    96: "The Lazy Sound: About",
    97: "The Lazy Sound: Function Words",
    98: "Nasal Sounds: M, N, NG",
    99: "Mixed Challenge 1",
    100: "Mixed Challenge 2",
    101: "Listen to the Teacher 1",
    102: "Listen to the Teacher 2",
    103: "TH vs. T: Thin",
    104: "TH vs. T: Tin",
    105: "TH vs. S: Think",
    106: "TH vs. S: Sink",
    107: "TH Sound: Then",
    108: "TH vs. D: Den",
    109: "TH in a Phrase: Thank You",
    110: "TH in a Phrase: I Think",
    111: "TH in a Phrase: This Is",
    112: "TH in a Phrase: They Are",
    113: "End Sound: Bus",
    114: "End Sound: Buzz",
    115: "End Sound: Cap",
    116: "End Sound: Cab",
    117: "End Sound: Back",
    118: "End Sound: Bag",
    119: "End Sound: Rice",
    120: "End Sound: Rise",
    121: "End Sounds: I Need Help",
    122: "End Sounds: Red Bag",
    123: "End Sounds: Class Starts",
    124: "Starting with SP: Spot",
    125: "Starting with P: Pot",
    126: "Starting with ST: Stop",
    127: "Starting with T: Top",
    128: "Starting with SK: School",
    129: "Starting with K: Cool",
    130: "Clusters: Green Grass",
    131: "Clusters: Blue Glass",
    132: "Clusters: Stand Still",
    133: "Clusters: Small Snake",
    134: "Clusters: Bring Books",
    135: "Clusters: Class Starts",
    136: "Three-Letter Word: Spring",
    137: "Three-Letter Word: String",
    138: "Three-Letter Word: Splash",
    139: "Three-Letter Word: Scratch",
    140: "Lazy Sound: About",
    141: "Lazy Sound: Again",
    142: "Lazy Sound: Banana",
    143: "Quiet Vowel: Today",
    144: "Lazy Sound: I Want a Banana",
    145: "Quiet Words: A Pencil",
    146: "Quiet Words: For You",
    147: "Quiet Words: Need To",
    148: "Linking: Turn It On",
    149: "Linking: Pick It Up",
    150: "Linking: Read It Again",
    151: "Changing Sounds: Can You",
    152: "Shortening: Want To",
    153: "Dropping Sounds: Don't Know",
    154: "Shortening: Going To",
    155: "Connected: Going To Read",
    156: "Short I: Ship",
    157: "Long EE: Sheep",
    158: "Short U: Full",
    159: "Long OO: Fool",
    160: "E Sound: Bed",
    161: "A Sound: Bad",
    162: "Two-Part Vowel: Late",
    163: "Two-Part Vowel: Light",
    164: "Two-Part Vowel: Boat",
    165: "Two-Part Vowel: Boy",
    166: "Can You Repeat That?",
    167: "I Don't Understand",
    168: "Can I Work With My Partner?",
    169: "I Think the Answer Is...",
    170: "The Experiment Shows...",
    171: "My Evidence Is...",
    172: "I Need More Time",
    173: "Could You Check My Work?",
    174: "I Can Explain My Idea",
    175: "I Agree Because...",
}

# Build a lookup of current displayName -> id by parsing the file
# Each entry starts with "id": N and has "displayName": "..."
# We need to find each entry's id and then replace its displayName
changed = 0

def replace_display_name(match):
    global changed
    full = match.group(0)
    # Extract the id from the same entry block
    # Look backwards from this match for "id": N
    block_start = content.rfind('"id":', 0, match.start())
    if block_start == -1:
        return full
    id_match = re.search(r'"id":\s*(\d+)', content[block_start:block_start+30])
    if not id_match:
        return full
    eid = int(id_match.group(1))
    if eid in NAMES:
        old_name = match.group(1)
        new_name = NAMES[eid]
        if old_name != new_name:
            changed += 1
            return f'"displayName": "{new_name}"'
    return full

# Match "displayName": "anything" (handling escaped quotes inside)
new_content = re.sub(
    r'"displayName":\s*"((?:[^"\\]|\\.)*)"',
    replace_display_name,
    content
)

with open(DS_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {changed} display names in {DS_PATH}")
