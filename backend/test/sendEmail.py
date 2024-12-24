import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

HOST = "smtp.arubabusiness.it"
SENDER = "postmaster@soluzionienergetiche.eu"
SENDER_PWD = "M4ster$2023"

def sendEmail(to: str, subject: str, body: str) -> None:
    msg = MIMEMultipart()
    msg['From'] = SENDER
    msg['To'] = to
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP(HOST) as server:
            server.login(SENDER, SENDER_PWD)
            server.sendmail(SENDER, to, msg.as_string())
        print("Mail sent")
        return
    except Exception as e:
        print(f"Error sending mail: {e}")


if __name__ == "__main__":
    sendEmail("tarsier79mc@gmail.com", "Test", "Test mail")
