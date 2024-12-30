import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { FirebaseServiceAccount } from '../types/firebase';

const serviceAccount: FirebaseServiceAccount = {
  type: "service_account",
  project_id: "talktome-bd6df",
  private_key_id: "9181df25a547cfba188f5d6e4c90fd73211853aa",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDXlySGbnlmxLYS\nLkquhRBAfdSrywN82ravvgOZ35Tzxi3Bg1+9dEeAOBf/JVA04IAOvfjtrQ/8Lc3l\n6jy+wOzEdV0y5Q08jW5H0E0f2NIe2v3pNb87dNqNUP4tOYADFXnSZED06VliQnKZ\nGOQl178x1Vo5J10oj0xu8yIMQLipyu7r3OPRwcO2Mrtx7tXUmULuvM4esrNExxAM\nRxKBHBkFwvQ5kniVlCSbCii/zNhfE4Y4dRT9Oy4j5uaD9j2ZDH0uTfw+7uhq47hf\ncWaAuiimxdFYPPfN3YsOM9hFU/XFDxlYRvSkOYt0K2wpZtucXI9DpX+eNi4JbZCE\nWEUQZN/LAgMBAAECggEAA0vSSSPjQ0j6p6iBh82NBA9ocv/1m7EUXfd/wpiChH+h\nL3Y8vn7KoRE6fLIrWcOc8ZzB85BT0D07CqrcJuZ4OEC7Hg4Wd7iJ2Rs8MqJ0A/jB\nLRGfTN9qgAKfAD4C0QlBBZB21cfDkBcH/YM96b40tCRY7srFR9t5BbE98gYDTMVA\nVslYN8aYTmnWGXO/K9kzi8veD8UM2EkqXF+5Vwc+j0l+OZoQonsjU+fOyTrFGK3z\ncAd1PCAaH3llvNddtrAXCVDEaOAu/VUOn41I6nU0p/6VEI+VUuNHzsk159wM4fXF\nNGeh4wBvgx4SbMwgo04YlhpJYKxc1QZ1pAlHNqfhsQKBgQDs/Af64nWvNPnYNIv7\nCbPkqafoM21GQd92B5y4V9zw67jzvtUK26LX2PY1DwVB1yaQ0SR4OzbEJgls0IjL\ntibaIseAz+uDi4S3DQDfNh0p/mDtV2jJs9J6j86u8cpJjKI1TWEA+hqFA/c5VssS\nk5DghTLaRrkgAZtSniEffo96JQKBgQDo46Ynf7JBNpU+YCwFTqIS5rNWbUlbS/jP\nRxInYdDkAX+mx1AE1hq86Bx2PGPdL8USiM+F3s0qOkh4njIHls+8PB5QF3wE7rBD\nFSVLkqFPFfAd9nGXPisUDbhGLbyUtnhYgDWXA/iSDKtfkQ/r7QPq/RM5yoZg9yPU\nAApfU7m3LwKBgF+XDZT6MaQZh0nZcDkzYbezY0H7NHGpcnyGd4W4EyuuuWzAJej6\nTQYpwq4GQAWdxjWV1tMUd3PJL/YPa45YC/XjH3vq4kGuTjsT6K0gg8UDkY9Kub7a\nZOUBCspwRztBmdBMRPuC5p2OyvL6+nCky0R1Fd0Lt/KcE03Q8OVmRHNtAoGBAOUQ\nzSP6sQz9sAv7MjFCJ54ptmmi8s1Oy3qtMAj2aC1r3+/eCTHImeIG97/AJIWxb8iM\nMno9LFWFoDSrfRAD4W4HP9WNU9nSICLLULSlk+4i6Nu/w/h8GIkP+ZllcSBg3bxG\n1u8j48FbntBP8XYf2YOvytJEBqqnS2FBbPJYesnXAoGBAKMm8cPdPtpqtNegw1Rd\n3zO8FuGzM70Qxr1rtv+/oA5Stq9jitGSTsQRC3CxLnwPmRLAfvFLwidkoo1T34vY\nIxa3NAQyXHvvDMTUYDsYrfSFIJO72NoL0E8lDbWkER/vkpdroQCqlB8tPeSaXw4Y\nIT20YuqDuCweHxdMm6FdEFQl\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-a261p@talktome-bd6df.iam.gserviceaccount.com",
  client_id: "108972705785821493417",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a261p%40talktome-bd6df.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

const app = initializeApp({
  credential: cert(serviceAccount)
});

export const db = getFirestore(app);