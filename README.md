# DREAD 98

```
================================================================================
     D R E A D   9 8   //   O P E R A T I O N S   M A N U A L   [1 9 9 8]
================================================================================
   SURVIVAL HORROR CLIENT // ZERO-BUILD THREE.JS RUNTIME // REV 1.2.0
================================================================================
```

A client-side 1998 retro survival horror first-person shooter. Designed as a self-contained runtime within a single zero-build execution environment, DREAD 98 delivers atmospheric single-player campaigns across 12 procedural sectors, low-latency peer-to-peer multiplayer over WebRTC, immersive 6DoF virtual reality via WebXR, and an offline-capable Progressive Web App architecture.

---

## Field Operations & Deployment

- **Live Web Terminal (GitHub Pages):** [https://r2dapps.github.io/dread98/](https://r2dapps.github.io/dread98/)
- **Source Repository:** [https://github.com/r2dapps/dread98](https://github.com/r2dapps/dread98)

---

## Technical Specifications & Architecture

```
[ HARDWARE / CLIENT ABSTRACTION LAYER ]
--------------------------------------------------------------------------------
Runtime Platform      : Modern Standards-Compliant Web Browser (WebGL 1.0/2.0)
Graphics Pipeline     : Three.js r128 (Zero-build ES6 Modules)
Transmission Protocol : WebRTC DataChannels (Peer-to-Peer Mesh)
Signaling Service     : PeerJS 1.5.4 Decentralized Broker
Sensory Rig (XR)      : WebXR Device API (Meta Quest 2 / Quest 3 / Quest Pro)
Asset Encodings       : Binary glTF (.glb), Web Audio API (Linear PCM / MP3)
Persistence Layer     : Service Worker (Cache Storage + Network-First Fallback)
```

---

## Sector Protocols & Core Engine Capabilities

### Procedural Sector Generation
The simulation renders 12 discrete environmental zones on demand—from subterranean Biolab installations and decaying industrial bunkers to foggy outdoor compounds under celestial illumination. Dynamic culling thresholds and deferred entity processing ensure solid framerates across low-power mobile GPUs and standalone VR hardware.

### Ballistics, Decals & Forensic Feedback
- Directional blood splatter projections dynamically calculate surface normals, depositing fading floor and wall stains.
- High-velocity projectile chunk emitters simulate flesh disruption.
- Directional HUD blood vignette provides immediate trauma feedback during close-quarters encounters.

### Threat Classification & Behavioral AI
Biological threats are driven by binary glTF skeletal hierarchies with dynamic state switching between idle, tracking, lunging, and death ragdoll transitions:

| Threat Code | Profile | Attributes | Threat Level |
| :--- | :--- | :--- | :--- |
| **SPECIMEN-W** | Standard Walker | Slow pursuit, high group density, erratic lunges | Moderate |
| **SPECIMEN-B** | Armored Brute | Absorbs ballistic shock, high kinetic damage | Severe |
| **SPECIMEN-S** | Slasher / Stalker | High-velocity flanking maneuvers, low audible signature | Critical |

### Lighting & Tactical Torch
Equipped with an integrated weapon-mounted tactical flashlight. Supports real-time cone attenuation and three operational states: `AUTO` (environment lux detection), `ON`, and `OFF`.

---

## Survivor Control Configuration

### Desktop Terminal (Standard Issue)

| Command | Key Binding | Operational Function |
| :--- | :--- | :--- |
| **Traverse** | `W` / `A` / `S` / `D` | Forward, backward, left strafe, right strafe |
| **Camera** | Mouse Delta | 360-degree pitch and yaw control |
| **Discharge Weapon** | Left Mouse Button | Primary firearm trigger |
| **Cycle Magazine** | `R` | Tactical reload sequence |
| **Tactical Flashlight** | `T` | Toggle Torch State: AUTO / ON / OFF |
| **Cell Recharge** | `F` | Battery charge sequence |
| **Vertical Evasion** | `Space` | Obstacle jump |
| **Target Acquisition** | `Z` | Precision scope zoom |
| **Audio Protocol** | `M` | Master audio mute |
| **Operations Menu** | `Escape` | Pause interface / field configuration |

### Mobile Touch Field Interface
- **Left Sector:** Virtual analog stick for full omnidirectional locomotion.
- **Right Sector:** Viewport rotation swipe area, dedicated tactile triggers for Fire, Reload, Torch, Scope, and Jump.

### WebXR Virtual Reality (Meta Quest 2 / Quest 3 / Quest Pro)
- **Primary Hand (Right Controller):** Weapon grip alignment, trigger fire, `A` button reload, `B` button flashlight switch, precision haptic rumble feedback.
- **Off Hand (Left Controller):** Thumbstick translation, system pause access.
- **Turning:** Discrete snap-turn on right thumbstick (comfort standard) with free 6DoF room-scale head tracking.
- **Biometric HUD:** Wrist-mounted physical dial monitoring operational vitality and magazine capacity.

---

## Multiplayer Emergency Transmissions (WebRTC)

No external dedicated servers are required. DREAD 98 utilizes direct peer-to-peer data channels for zero-latency co-op and competitive encounters.

```
                  [ PeerJS Signaling Broker ]
                             |
             +---------------+---------------+
             |                               |
     [ Host Node (Alpha) ] <=== WebRTC ===> [ Client Node (Beta) ]
             ^                                       ^
             |                                       |
             +======= Direct P2P Mesh DataChannel ===+
```

### Protocol Initialization:
1. Select **MULTIPLAYER** from the field menu.
2. Select operational doctrine:
   - **CO-OP:** Squad survival against procedural waves with unified kill tallies.
   - **TEAMS:** Two-faction tactical skirmish with isolated team spawn pads.
   - **FFA:** Unrestricted deathmatch with continuous combat respawns.
3. Transmit the generated 4-character frequency code (or share direct link `?room=CODE`).
4. Once peer validation handshake registers in the lobby, the host issues **START MATCH**.

---

## Service Worker & Offline Persistence Architecture

Field reliability is guaranteed via an autonomous Service Worker (`sw.js`):
- **Core Engine Scripts:** `index.html`, `manifest.json`, and `version.json` resolve via network-first caching, ensuring hot updates deploy seamlessly upon connection restoration.
- **Heavy Media Cache:** 3D model packages (`.glb`) and Web Audio wave tables cache locally upon first execution, enabling full single-player operation in zero-connectivity environments.
- **Runtime Revision Check:** Routine polling against `version.json` alerts active sessions when a new engine build is available without wiping player state.

---

## File Manifest

```
dread98/
├── .nojekyll                 # Prevents Jekyll asset omission on GitHub Pages
├── index.html                # Unified game runtime, shaders, and interface
├── manifest.json             # Progressive Web Application manifest
├── README.md                 # Archival field manual and technical documentation
├── sw.js                     # Cache lifecycle and service worker manager
├── version.json              # Engine revision tracking payload
├── assets/
│   ├── models/               # glTF binary meshes: zombie.glb, slasher.glb
│   └── sounds/               # 30 spatialized audio assets (weapons, impacts, foley)
└── icons/
    ├── icon-192.png          # Standard application icon (192x192)
    └── icon-512.png          # High-resolution application icon (512x512)
```

---

## GitHub Pages Deployment Guide

1. In the GitHub repository, navigate to **Settings > Pages**.
2. Set **Build and deployment > Source** to **Deploy from a branch**.
3. Set the target branch to `main` and directory to `/ (root)`.
4. Select **Save**. The live deployment will be available at:
   `https://r2dapps.github.io/dread98/`

---

## Recommended Repository Topics & Metadata

Add the following tags to the GitHub repository topic list:

`threejs`, `webgl`, `webxr`, `pwa`, `fps`, `survival-horror`, `webrtc`, `peerjs`, `multiplayer`, `meta-quest`, `javascript`, `game-development`, `retro-gaming`, `zero-build`, `retro-fps`

---

## Archival Credits & Disclaimers

Engineered by Razel Tech. Powered by Three.js (MIT License) and PeerJS (MIT License). Sound engineering and 3D assets derived from the Dead Zone production archives.
